from flask import Flask, jsonify, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_caching import Cache
import redis
import pandas as pd
from datetime import datetime
import os

# Initialize Flask app
app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI', 'sqlite:///hello.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CACHE_TYPE'] = 'RedisCache'
app.config['CACHE_REDIS_URL'] = os.environ.get('REDIS_URL', 'redis://localhost:6379/0')

# Initialize extensions
db = SQLAlchemy(app)
cache = Cache(app)

# Redis client
redis_client = redis.Redis(
    host=os.environ.get('REDIS_HOST', 'localhost'),
    port=int(os.environ.get('REDIS_PORT', 6379)),
    db=0,
    decode_responses=True
)


# Database Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'created_at': self.created_at.isoformat()
        }


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id,
            'created_at': self.created_at.isoformat()
        }


# Pandas-based data processing utility
class DataProcessor:
    @staticmethod
    def process_messages(messages):
        """Process messages using Pandas for analytics"""
        if not messages:
            return {'total': 0, 'avg_length': 0, 'by_hour': {}}
        
        df = pd.DataFrame([m.to_dict() for m in messages])
        
        # Calculate message lengths
        df['content_length'] = df['content'].apply(len)
        
        # Group by hour
        df['hour'] = pd.to_datetime(df['created_at']).dt.hour
        by_hour = df.groupby('hour').size().to_dict()
        
        return {
            'total': len(df),
            'avg_length': float(df['content_length'].mean()),
            'by_hour': by_hour
        }
    
    @staticmethod
    def generate_sample_data():
        """Generate sample data for demonstration"""
        return pd.DataFrame({
            'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
            'age': [25, 30, 35, 28],
            'city': ['NYC', 'LA', 'Chicago', 'Seattle']
        })


# Routes
@app.route('/')
def index():
    """Render the main page"""
    return render_template('index.html')


@app.route('/api/hello')
@cache.cached(timeout=60)
def hello():
    """Hello world endpoint with caching"""
    cached_hello = redis_client.get('hello_message')
    if cached_hello:
        return jsonify({
            'message': cached_hello,
            'source': 'cache',
            'timestamp': datetime.utcnow().isoformat()
        })
    
    message = "Hello, World! Welcome to the Flask Full-Stack App"
    redis_client.set('hello_message', message, ex=60)
    
    return jsonify({
        'message': message,
        'source': 'api',
        'timestamp': datetime.utcnow().isoformat()
    })


@app.route('/api/users', methods=['GET', 'POST'])
def users():
    """CRUD operations for users"""
    if request.method == 'GET':
        users_list = User.query.all()
        return jsonify([u.to_dict() for u in users_list])
    
    if request.method == 'POST':
        data = request.get_json()
        new_user = User(username=data.get('username'))
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.to_dict()), 201


@app.route('/api/messages', methods=['GET', 'POST'])
def messages():
    """CRUD operations for messages"""
    if request.method == 'GET':
        messages_list = Message.query.all()
        # Use Pandas for analytics
        analytics = DataProcessor.process_messages(messages_list)
        return jsonify({
            'messages': [m.to_dict() for m in messages_list],
            'analytics': analytics
        })
    
    if request.method == 'POST':
        data = request.get_json()
        new_message = Message(
            content=data.get('content'),
            user_id=data.get('user_id', 1)
        )
        db.session.add(new_message)
        db.session.commit()
        
        # Invalidate cache
        redis_client.delete('hello_message')
        
        return jsonify(new_message.to_dict()), 201


@app.route('/api/pandas-demo')
def pandas_demo():
    """Demonstrate Pandas functionality"""
    sample_data = DataProcessor.generate_sample_data()
    return jsonify({
        'sample_data': sample_data.to_dict(orient='records'),
        'statistics': {
            'mean_age': float(sample_data['age'].mean()),
            'max_age': int(sample_data['age'].max()),
            'min_age': int(sample_data['age'].min())
        }
    })


@app.route('/api/health')
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'database': 'connected',
        'redis': 'connected' if redis_client.ping() else 'disconnected',
        'timestamp': datetime.utcnow().isoformat()
    })


# Create tables
with app.app_context():
    db.create_all()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=os.environ.get('DEBUG', False))

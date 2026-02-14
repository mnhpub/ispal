import pytest
import json
from app import app, db, User, Message


@pytest.fixture
def client():
    """Create a test client"""
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['CACHE_TYPE'] = 'SimpleCache'
    
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client


@pytest.fixture
def sample_user(client):
    """Create a sample user for testing"""
    response = client.post('/api/users', 
                          json={'username': 'testuser'},
                          content_type='application/json')
    return json.loads(response.data)


class TestHelloEndpoint:
    """Test the hello world endpoint"""
    
    def test_hello_returns_message(self, client):
        """Test that hello endpoint returns a message"""
        response = client.get('/api/hello')
        data = json.loads(response.data)
        
        assert response.status_code == 200
        assert 'message' in data
        assert 'Hello' in data['message']
    
    def test_hello_returns_timestamp(self, client):
        """Test that hello endpoint returns a timestamp"""
        response = client.get('/api/hello')
        data = json.loads(response.data)
        
        assert 'timestamp' in data


class TestUserEndpoints:
    """Test user CRUD operations"""
    
    def test_create_user(self, client):
        """Test creating a new user"""
        response = client.post('/api/users',
                              json={'username': 'newuser'},
                              content_type='application/json')
        data = json.loads(response.data)
        
        assert response.status_code == 201
        assert data['username'] == 'newuser'
        assert 'id' in data
    
    def test_get_users(self, client, sample_user):
        """Test getting all users"""
        response = client.get('/api/users')
        data = json.loads(response.data)
        
        assert response.status_code == 200
        assert isinstance(data, list)
        assert len(data) >= 1
    
    def test_create_user_missing_username(self, client):
        """Test creating user without username"""
        response = client.post('/api/users',
                              json={},
                              content_type='application/json')
        
        assert response.status_code == 200


class TestMessageEndpoints:
    """Test message operations"""
    
    def test_get_messages_empty(self, client):
        """Test getting messages when empty"""
        response = client.get('/api/messages')
        data = json.loads(response.data)
        
        assert response.status_code == 200
        assert 'messages' in data
        assert 'analytics' in data
    
    def test_create_message(self, client, sample_user):
        """Test creating a message"""
        response = client.post('/api/messages',
                              json={'content': 'Hello World!', 'user_id': sample_user['id']},
                              content_type='application/json')
        data = json.loads(response.data)
        
        assert response.status_code == 201
        assert data['content'] == 'Hello World!'


class TestPandasDemo:
    """Test Pandas functionality"""
    
    def test_pandas_demo(self, client):
        """Test the Pandas demo endpoint"""
        response = client.get('/api/pandas-demo')
        data = json.loads(response.data)
        
        assert response.status_code == 200
        assert 'sample_data' in data
        assert 'statistics' in data
        assert 'mean_age' in data['statistics']


class TestHealthEndpoint:
    """Test health check endpoint"""
    
    def test_health_check(self, client):
        """Test health endpoint returns status"""
        response = client.get('/api/health')
        data = json.loads(response.data)
        
        assert response.status_code == 200
        assert 'status' in data
        assert 'database' in data
        assert 'timestamp' in data


class TestIndexRoute:
    """Test the index route"""
    
    def test_index_returns_html(self, client):
        """Test that index returns HTML"""
        response = client.get('/')
        
        assert response.status_code == 200
        assert b'html' in response.data.lower() or b'<!DOCTYPE' in response.data


class TestUserModel:
    """Test User model functionality"""
    
    def test_user_to_dict(self):
        """Test User model serialization"""
        user = User(id=1, username='testuser')
        data = user.to_dict()
        
        assert data['id'] == 1
        assert data['username'] == 'testuser'
        assert 'created_at' in data


class TestMessageModel:
    """Test Message model functionality"""
    
    def test_message_to_dict(self):
        """Test Message model serialization"""
        message = Message(id=1, content='Test message', user_id=1)
        data = message.to_dict()
        
        assert data['id'] == 1
        assert data['content'] == 'Test message'
        assert data['user_id'] == 1
        assert 'created_at' in data

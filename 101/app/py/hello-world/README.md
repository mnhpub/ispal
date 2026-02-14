# Hello World Full-Stack Application

A comprehensive full-stack application demonstrating the integration of Python, Flask, SQLAlchemy, pytest, Docker, Redis, and Pandas.

## 🛠️ Tech Stack

- **Python 3.11** - Core programming language
- **Flask** - Web framework
- **SQLAlchemy** - Database ORM
- **Redis** - Caching and message broker
- **Pandas** - Data processing and analytics
- **pytest** - Testing framework
- **Docker** - Containerization
- **Gunicorn** - WSGI HTTP server

## 📁 Project Structure

```
techforce/
├── app.py              # Main Flask application
├── requirements.txt     # Python dependencies
├── Dockerfile          # Docker image configuration
├── docker-compose.yml  # Docker Compose orchestration
├── templates/
│   └── index.html      # Frontend HTML template
├── tests/
│   └── test_app.py     # Pytest test suite
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended)

```bash
# Start all services
docker-compose up --build

# Access the application
open http://localhost:5000
```

### Option 2: Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Start Redis (required)
redis-server

# Run the application
python app.py

# In another terminal, run tests
pytest tests/test_app.py -v
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Main page (HTML) |
| GET | `/api/hello` | Hello world message (cached) |
| GET | `/api/health` | Health check endpoint |
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create new user |
| GET | `/api/messages` | Get all messages with analytics |
| POST | `/api/messages` | Create new message |
| GET | `/api/pandas-demo` | Pandas functionality demo |

## 🧪 Running Tests

```bash
# Run all tests with verbose output
pytest tests/test_app.py -v

# Run with coverage
pytest --cov=app tests/

# Run specific test class
pytest tests/test_app.py::TestHelloEndpoint -v
```

## 🐳 Docker Commands

```bash
# Build the image
docker build -t flask-hello-world .

# Run the container
docker run -p 5000:5000 -e REDIS_HOST=localhost flask-hello-world

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop with volumes
docker-compose down -v
```

## 🔧 Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URI` | `sqlite:///hello.db` | Database connection string |
| `REDIS_URL` | `redis://localhost:6379/0` | Redis connection URL |
| `REDIS_HOST` | `localhost` | Redis hostname |
| `REDIS_PORT` | `6379` | Redis port |
| `DEBUG` | `False` | Enable debug mode |
| `SECRET_KEY` | `dev-secret-key` | Flask secret key |

## 📊 Features

- **RESTful API** with Flask
- **SQLAlchemy ORM** with SQLite database
- **Redis Caching** for improved performance
- **Pandas Analytics** for data processing
- **Comprehensive Tests** with pytest
- **Containerized Deployment** with Docker
- **Responsive Frontend** with vanilla HTML/CSS/JS

## 🎯 Hello World Message

The application demonstrates a hello world message that:
- Is served via a REST API endpoint
- Is cached in Redis for performance
- Returns JSON with timestamp and source information

## 📈 Data Processing

Pandas is used for:
- Message analytics (count, average length)
- Hourly distribution of messages
- Sample data generation for demos
- Statistical analysis (mean, min, max)

## 🔒 Security Notes

- Use strong secrets in production
- Validate all inputs
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement proper authentication/authorization

## 📝 License

MIT License

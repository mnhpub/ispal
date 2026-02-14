# Docker101

- **Build Image**
- **Discuss container [patterns](https://github.com/fostercs/docker101/blob/main/docs/patterns.md)**

## Pull Image
`docker pull fostercs/docker101`

## Build and Run App via Compose
`docker compose up --build`

## Docker CLI Login
`docker login`

## Build
`docker build -t fostercs/docker101 .`

## List Images
`docker images`

## Publish Image
`docker push fostercs/docker101:latest`

## Run the repl
# CMD gunicorn 'app:app' --bind=0.0.0.0:8000
CMD ["python3", "map-filter-reduce.py"]

## Run the application
CMD gunicorn 'app:app' --bind=0.0.0.0:8000
# CMD ["python3", "map-filter-reduce.py"]

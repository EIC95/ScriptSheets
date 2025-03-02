# Docker Compose

## What is Docker Compose?
Docker Compose is a tool for defining and managing multi-container Docker applications. It uses a YAML file to configure application services, networks, and volumes, simplifying container orchestration.

## Installing Docker Compose
Docker Compose is included in Docker Desktop. To install it separately:
```sh
sudo apt-get install docker-compose
```  
To verify installation:
```sh
docker-compose --version
```  

## Defining a `docker-compose.yml` File
Example `docker-compose.yml` for a simple web application:
```yaml
version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
  app:
    build: ./app
    depends_on:
      - db
  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydatabase
```  

## Common Docker Compose Commands
- **Start services in detached mode:**
  ```sh
  docker-compose up -d
  ```  
- **Stop services:**
  ```sh
  docker-compose down
  ```  
- **Restart services:**
  ```sh
  docker-compose restart
  ```  
- **View running services:**
  ```sh
  docker-compose ps
  ```  
- **View logs:**
  ```sh
  docker-compose logs
  ```  
- **Execute a command inside a container:**
  ```sh
  docker-compose exec app sh
  ```  


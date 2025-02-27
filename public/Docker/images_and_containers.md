# Images & Containers

## What are Docker Images?
A Docker image is a lightweight, stand-alone, and executable software package that includes everything needed to run an application: code, runtime, libraries, environment variables, and configurations. Images are read-only and act as a blueprint for containers.

### Common Image Commands
- **Pull an image**: Download an image from a registry.
  ```sh
  docker pull <image_name>
  ```  
- **List images**: View downloaded images.
  ```sh
  docker images
  ```  
- **Remove an image**: Delete an image.
  ```sh
  docker rmi <image_id>
  ```  
- **Build an image**: Create a custom image from a Dockerfile.
  ```sh
  docker build -t <image_name> .
  ```  
- **Inspect an image**: Get detailed information about an image.
  ```sh
  docker inspect <image_name>
  ```  

## What are Docker Containers?
A Docker container is a running instance of an image. It includes the application and its dependencies but runs in an isolated environment. Containers are lightweight, fast, and reproducible.

### Common Container Commands
- **Run a container**: Start a container from an image.
  ```sh
  docker run -d --name my_container <image_name>
  ```  
- **Run a container interactively**: Start a container with an interactive shell.
  ```sh
  docker run -it <image_name> /bin/bash
  ```  
- **List running containers**: View active containers.
  ```sh
  docker ps
  ```  
- **List all containers** (including stopped ones).
  ```sh
  docker ps -a
  ```  
- **Stop a container**: Gracefully stop a running container.
  ```sh
  docker stop <container_id>
  ```  
- **Kill a container**: Forcefully stop a container.
  ```sh
  docker kill <container_id>
  ```  
- **Remove a container**: Delete a stopped container.
  ```sh
  docker rm <container_id>
  ```  
- **View container logs**: Check logs of a container.
  ```sh
  docker logs <container_id>
  ```  
- **Access a running container**: Open an interactive shell in a running container.
  ```sh
  docker exec -it <container_id> /bin/bash
  ```  

### Container Lifecycle
1. **Create a container without running it**
   ```sh
   docker create --name my_container <image_name>
   ```  
2. **Start a stopped container**
   ```sh
   docker start my_container
   ```  
3. **Restart a container**
   ```sh
   docker restart my_container
   ```  
4. **Pause a container**
   ```sh
   docker pause my_container
   ```  
5. **Unpause a container**
   ```sh
   docker unpause my_container
   ```  
6. **Remove all stopped containers**
   ```sh
   docker container prune
   ```  



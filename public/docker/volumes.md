# Volumes & Persistent Data

## What are Docker Volumes?
Docker volumes are used to persist data generated and used by Docker containers. Unlike bind mounts, volumes are managed by Docker and offer better performance and flexibility.

### Creating and Managing Volumes
- **Create a volume**
  ```sh
  docker volume create my_volume
  ```  
- **List all volumes**
  ```sh
  docker volume ls
  ```  
- **Inspect a volume**
  ```sh
  docker volume inspect my_volume
  ```  
- **Remove a volume**
  ```sh
  docker volume rm my_volume
  ```  
- **Remove all unused volumes**
  ```sh
  docker volume prune
  ```  

## Using Volumes with Containers
- **Mount a volume to a container**
  ```sh
  docker run -d -v my_volume:/data --name my_container my_image
  ```  
- **Verify volume usage inside the container**
  ```sh
  docker exec -it my_container ls /data
  ```  

## Bind Mounts vs. Volumes
| Feature | Bind Mounts | Volumes |
|---------|------------|---------|
| Managed by Docker | No | Yes |
| Works on all platforms | No | Yes |
| Performance | Slower | Faster |
| Recommended for production | No | Yes |

## Backing Up and Restoring Volumes
- **Backup a volume**
  ```sh
  docker run --rm -v my_volume:/data -v $(pwd):/backup busybox tar czf /backup/backup.tar.gz -C /data .
  ```  
- **Restore a volume from backup**
  ```sh
  docker run --rm -v my_volume:/data -v $(pwd):/backup busybox tar xzf /backup/backup.tar.gz -C /data
  ```  



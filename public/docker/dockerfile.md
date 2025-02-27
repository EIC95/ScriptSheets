# Dockerfile & Image Building

## What is a Dockerfile?
A Dockerfile is a script containing a set of instructions to automate the creation of a Docker image. It defines the base image, dependencies, environment settings, and the commands needed to run the application.

### Example of a Simple Dockerfile
```dockerfile
# Use an official base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application code
COPY . .

# Expose a port
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]
```

### Building an Image from a Dockerfile
- **Navigate to the directory containing the Dockerfile**
  ```sh
  cd /path/to/project
  ```  
- **Build the image with a custom tag**
  ```sh
  docker build -t myapp:latest .
  ```  
- **View the built image**
  ```sh
  docker images
  ```  

### Running a Container from a Custom Image
- **Run the container in detached mode**
  ```sh
  docker run -d -p 3000:3000 myapp:latest
  ```  
- **Verify the running container**
  ```sh
  docker ps
  ```  
- **Access the application in a web browser**  
  Open `http://localhost:3000`



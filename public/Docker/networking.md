# Docker Networking

## What is Docker Networking?
Docker networking enables communication between containers, as well as between containers and the host system. It allows for flexible connectivity setups in different environments.

## Types of Docker Networks
1. **Bridge Network (default)**
    - Used for communication between containers on the same host.
    - Containers in the same bridge network can communicate using their container names.
    - Example:
      ```sh
      docker network create my_bridge
      docker run -d --name container1 --network my_bridge my_image
      docker run -d --name container2 --network my_bridge my_image
      ```  

2. **Host Network**
    - Removes network isolation between the container and the host.
    - The container shares the host’s networking stack.
    - Example:
      ```sh
      docker run --network host my_image
      ```  

3. **None Network**
    - The container has no network access.
    - Example:
      ```sh
      docker run --network none my_image
      ```  

4. **Overlay Network**
    - Used in multi-host Docker Swarm setups.
    - Allows communication between containers across different hosts.
    - Example:
      ```sh
      docker network create -d overlay my_overlay
      ```  

5. **Macvlan Network**
    - Assigns a MAC address to the container, making it appear as a physical device on the network.
    - Example:
      ```sh
      docker network create -d macvlan --subnet=192.168.1.0/24 my_macvlan
      ```  

## Managing Docker Networks
- **List networks**
  ```sh
  docker network ls
  ```  
- **Inspect a network**
  ```sh
  docker network inspect my_network
  ```  
- **Remove a network**
  ```sh
  docker network rm my_network
  ```  
- **Prune unused networks**
  ```sh
  docker network prune
  ```  



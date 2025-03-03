# Security and Authentication

## Introduction
MongoDB provides various security mechanisms to protect data, control access, and ensure authentication. Implementing security best practices is crucial for preventing unauthorized access and data breaches.

## Enabling Authentication
By default, MongoDB does not enforce authentication. To enable it:
1. Create an administrative user:
   ```js
   use admin
   db.createUser({
     user: "admin",
     pwd: "securepassword",
     roles: [{ role: "root", db: "admin" }]
   })
   ```
2. Enable authentication in the MongoDB configuration file (`mongod.conf`):
   ```yaml
   security:
     authorization: enabled
   ```
3. Restart MongoDB to apply changes.

## Role-Based Access Control (RBAC)
MongoDB uses roles to manage user permissions.

### Creating a User with Specific Role
```js
db.createUser({
  user: "readonlyUser",
  pwd: "password123",
  roles: [{ role: "read", db: "mydatabase" }]
})
```

### Common Built-in Roles
| Role          | Description                                       |
|--------------|--------------------------------------------------|
| `read`       | Allows reading data from a database.            |
| `readWrite`  | Allows both reading and writing data.           |
| `dbAdmin`    | Allows database administration tasks.           |
| `clusterAdmin` | Grants cluster-wide administrative privileges. |

## Enabling Network Security
### Binding MongoDB to a Specific IP Address
By default, MongoDB listens on all network interfaces. To restrict access, update `mongod.conf`:
```yaml
net:
  bindIp: 127.0.0.1
```

### Using Firewalls to Restrict Access
Configure firewall rules to allow only trusted IPs:
```sh
sudo ufw allow from 192.168.1.100 to any port 27017
```

## Enabling TLS/SSL Encryption
To encrypt communication, enable TLS/SSL:
```yaml
net:
  ssl:
    mode: requireSSL
    PEMKeyFile: /etc/ssl/mongodb.pem
```

## Enabling Database Auditing
MongoDB Enterprise provides an auditing feature to track user activities:
```yaml
auditLog:
  destination: file
  format: BSON
  path: /var/log/mongodb-audit.log
```


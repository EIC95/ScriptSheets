# Deployment of Django Application

## **Prepare Django for Production**

- **Set `DEBUG` to `False`:**

In `settings.py`, make sure `DEBUG` is set to `False`:

```python
DEBUG = False
```

- **Configure `ALLOWED_HOSTS`:**

Add your domain or IP address to `ALLOWED_HOSTS` in `settings.py`:

```python
ALLOWED_HOSTS = ['your-domain.com', 'www.your-domain.com']
```

- **Collect Static Files:**

Run the following command to collect all static files into the directory specified by `STATIC_ROOT`:

```sh
python manage.py collectstatic
```

## **Set Up a Web Server**

- **Configure Gunicorn (WSGI Server):**

Install Gunicorn, a WSGI HTTP server, to serve your Django app:

```sh
pip install gunicorn
```

Run Gunicorn to start the server:

```sh
gunicorn myproject.wsgi:application
```

- **Configure Nginx:**

Set up Nginx to serve your app and handle static files.

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /static/ {
        alias /path/to/your/project/static/;
    }
}
```

Restart Nginx:

```sh
sudo systemctl restart nginx
```

## **Set Up Database**

- **Database Configuration (e.g., PostgreSQL)**:

Update `DATABASES` in `settings.py` for production:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'your-db-host',  # e.g., RDS endpoint
        'PORT': '5432',
    }
}
```

Run migrations:

```sh
python manage.py migrate
```

## **Security Considerations**

- **Set up SSL (HTTPS)**:

Use Let's Encrypt to set up SSL for free. Example using Certbot:

```sh
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

- **Use Strong Secret Key**:

Ensure the `SECRET_KEY` in `settings.py` is a strong and unique string. For production, generate it using a secure method and set it as an environment variable or in a `.env` file.

## **Deploy on Hosting Platforms (e.g., Heroku, AWS)**

- **Heroku**:  
  - Push your project to a Git repository and deploy using Heroku CLI with a `Procfile`:
    ```txt
    web: gunicorn myproject.wsgi:application
    ```
  
  - Run commands like `heroku run python manage.py migrate` and `heroku ps:restart`.

- **AWS (Elastic Beanstalk)**:  
  - Use AWS Elastic Beanstalk CLI (`eb init`) to set up and deploy your Django app to AWS.

## **Monitor and Maintain**

- **Set Up Logs**:  
  Use Django's logging framework for error and request logging. Ensure logs are being saved correctly on your server.

- **Configure Backups**:  
  Set up automated backups for your database (especially if you're using RDS).

- **Update and Maintain**:  
  Regularly update Django and all dependencies using `pip` and handle any security patches.
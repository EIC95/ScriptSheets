# PHP Forms

## Introduction

Forms are essential for user interaction in web applications. PHP can process form data sent via HTTP methods like GET and POST.

## Creating a Form

Use HTML to create a form and specify the `method` and `action` attributes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Form</title>
</head>
<body>
    <form action="process_form.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

## Processing Form Data

Create a PHP script to handle form submissions.

```php
<?php
// process_form.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
}
?>
```

## Form Methods

- **GET**: Appends form data to the URL. Suitable for small amounts of data.
- **POST**: Sends form data in the HTTP request body. Suitable for larger amounts of data or sensitive information.

## Validating Form Data

Always validate and sanitize form data to ensure security and data integrity.

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);

    if (empty($name)) {
        echo "Name is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
    } else {
        echo "Form submitted successfully!";
    }
}
?>
```

## File Uploads

Use the `enctype` attribute to handle file uploads.

```html
<form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="file">Upload File:</label>
    <input type="file" id="file" name="file"><br>
    <input type="submit" value="Upload">
</form>
```

Process the file upload in PHP.

```php
<?php
// upload.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if file is an actual image or fake image
    $check = getimagesize($_FILES["file"]["tmp_name"]);
    if ($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }

    // Check file size
    if ($_FILES["file"]["size"] > 500000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif") {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            echo "The file ". htmlspecialchars(basename($_FILES["file"]["name"])). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>
```

## Security Considerations

- Use `htmlspecialchars()` to prevent XSS attacks.
- Validate and sanitize all user inputs.
- Use prepared statements for database queries to prevent SQL injection.
- Limit file upload sizes and types to prevent security risks.
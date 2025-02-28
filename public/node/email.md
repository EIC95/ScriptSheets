# Email Handling

## Introduction
Sending emails in Node.js can be achieved using the `nodemailer` package. It allows applications to send emails via SMTP, Gmail, or other email services.

## Installing Nodemailer

```sh
npm install nodemailer
```

## Sending a Basic Email

### Example: Sending an Email Using SMTP
```js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient@example.com",
  subject: "Test Email",
  text: "Hello from Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
```

## Sending HTML Emails

### Example: Sending an Email with HTML Content
```js
const mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient@example.com",
  subject: "Styled Email",
  html: "<h1>Welcome</h1><p>This is a styled email</p>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
```

## Sending Emails with Attachments

### Example: Attaching a File
```js
const mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient@example.com",
  subject: "Email with Attachment",
  text: "Please find the attached file.",
  attachments: [
    {
      filename: "example.txt",
      path: "./example.txt",
    },
  ],
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
```


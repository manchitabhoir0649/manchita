 Student Profile Management System (Backend API)

A Node.js + Express + MongoDB backend application with JWT authentication and full CRUD operations for managing students, courses, and teachers.

---
 Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Student CRUD Operations
- Course Management
- Teacher Management
- MongoDB Integration
- REST API Architecture

---
 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- bcryptjs
- dotenv

---
 Project Structure

```

/models
/controllers
/routes
/middleware
/config
server.js

````

---
Installation

```bash
npm install
````

---
 Run Project

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---
 Base URL

```
http://localhost:5000/api
```

---
 Authentication

All protected routes require JWT token:

```
Authorization: Bearer <JWT_TOKEN>
```

---
API Endpoints

## Auth Routes

* POST `/auth/register`
* POST `/auth/login`

---

## Student Routes

* POST `/students`
* GET `/students`
* GET `/students/:id`
* PUT `/students/:id`
* DELETE `/students/:id`

---

## Course Routes

* POST `/courses`
* GET `/courses`

---

## Teacher Routes

* POST `/teachers`
* GET `/teachers`

---
 Postman Collection

```
Student-Profile-Management-System.postman_collection.json
```

---
 Architecture

```
Client (Postman / Frontend)
        |
        v
Express Server (Node.js)
        |
        v
Routes
        |
        v
Controllers
        |
        v
MongoDB Database
```

---

# 👨‍💻 Author

Manchita Jaywant Bhoir




# Movies API

A RESTful API for managing movies and reviews, with user authentication and role-based access control. Built with **Express.js 5**, **Sequelize ORM**, and **SQLite**.

## Tech Stack

- **Node.js** + **Express.js 5**
- **Sequelize ORM** — database management
- **SQLite** — lightweight database
- **JWT** — authentication
- **bcrypt** — password hashing
- **express-validator** — input validation
- **morgan** — HTTP request logger

## Features

- User registration & login with JWT authentication
- CRUD operations for movies
- Review system for movies
- Admin middleware for protected operations
- Input validation on all routes
- Role-based access control

## API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register user | No |
| POST | `/auth/login` | Login | No |
| GET | `/movies` | Get all movies | No |
| POST | `/movies` | Create movie | Admin |
| GET | `/reviews` | Get reviews | No |
| POST | `/reviews` | Add review | Yes |

## How to Run

```bash
npm install
npm start
```

## Author

**Houssame El Bandoudi** — [GitHub](https://github.com/HOUSSAMEELBANDOUDI)

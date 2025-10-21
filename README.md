# 🎬 Movies API

A complete **RESTful API** built with **Node.js**, **Express**, and **SQLite** for managing movies.
This API includes authentication, comments, and watchlist functionality.

---

## 🚀 Features

* 🔑 User authentication (Register / Login with JWT)
* 🎥 CRUD operations for movies
* 💬 Add and view comments for each movie
* 👀 Manage a personal watchlist
* 🧰 Middleware for validation, authentication, and error handling
* 🗄️ SQLite database (lightweight and fast)
* 🧪 Input validation using `express-validator`

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **SQLite** (`sqlite3` or `sequelize`)
* **JWT (jsonwebtoken)** — user authentication
* **bcryptjs** — password hashing
* **express-validator** — request validation
* **dotenv** — environment variables
* **morgan** — logging middleware

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/HOUSSAMEELBANDOUDI/Movies_api.git
   cd Movies_api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```env
   PORT=3000
   JWT_SECRET=your_secret_key
   DATABASE_URL=./db/movies.sqlite
   ```

4. **Run database migrations** (if using Sequelize)

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the server**

   ```bash
   npm start
   ```

Server will start at **[http://localhost:3000](http://localhost:3000)**

---

## 🔐 Authentication Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login and get token |

### Example Request – Register

```json
{
  "name": "Houssame",
  "email": "houssame@example.com",
  "password": "123456"
}
```

### Example Response

```json
{
  "message": "User registered successfully"
}
```

### Example Request – Login

```json
{
  "email": "houssame@example.com",
  "password": "123456"
}
```

### Example Response

```json
{
  "token": "your_jwt_token"
}
```

Use this token for protected routes (movies, comments, watchlist):

```
Authorization: Bearer your_jwt_token
```

---

## 🎥 Movie Endpoints

| Method | Endpoint          | Description          | Auth |
| ------ | ----------------- | -------------------- | ---- |
| GET    | `/api/movies`     | Get all movies       | ❌    |
| GET    | `/api/movies/:id` | Get a single movie   | ❌    |
| POST   | `/api/movies`     | Add a new movie      | ✅    |
| PUT    | `/api/movies/:id` | Update movie details | ✅    |
| DELETE | `/api/movies/:id` | Delete a movie       | ✅    |

### Example Request – Add a Movie

```json
{
  "name": "Inception",
  "genre": "Sci-Fi",
  "releaseDate": "2010-07-16"
}
```

---

## 💬 Comments Endpoints

| Method | Endpoint                   | Description                  | Auth |
| ------ | -------------------------- | ---------------------------- | ---- |
| GET    | `/api/movies/:id/comments` | Get all comments for a movie | ❌    |
| POST   | `/api/movies/:id/comments` | Add a comment to a movie     | ✅    |

### Example Request – Add Comment

```json
{
  "text": "Amazing movie! Highly recommended."
}
```

---

## 👀 Watchlist Endpoints

| Method | Endpoint                  | Description                 | Auth |
| ------ | ------------------------- | --------------------------- | ---- |
| GET    | `/api/watchlist`          | Get user's watchlist        | ✅    |
| POST   | `/api/watchlist/:movieId` | Add movie to watchlist      | ✅    |
| DELETE | `/api/watchlist/:movieId` | Remove movie from watchlist | ✅    |

---

## 🧰 Middleware

* **authMiddleware** — Verifies JWT tokens for protected routes
* **errorHandler** — Handles errors gracefully and returns JSON responses
* **validateRequest** — Uses `express-validator` to ensure valid input

---

## 📁 Project Structure

```
Movies_api/
│
├── controllers/
│   ├── authController.js
│   ├── movieController.js
│   ├── commentController.js
│   └── watchlistController.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── validateRequest.js
│
├── models/
│   ├── user.js
│   ├── movie.js
│   ├── comment.js
│   └── watchlist.js
│
├── routes/
│   ├── authRoutes.js
│   ├── movieRoutes.js
│   ├── commentRoutes.js
│   └── watchlistRoutes.js
│
├── db/
│   └── database.sqlite
│
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## 🧑‍💻 Author

**HOUSSAME ELBANDOUDI**
📧 [elbandoudi99@gmail.com](mailto:elbandoudi99@gmail.com)
🔗 [GitHub Profile](https://github.com/HOUSSAMEELBANDOUDI)

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).


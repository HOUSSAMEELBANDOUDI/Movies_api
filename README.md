# 🎬 Movies API

A simple **RESTful API** built with **Node.js**, **Express**, and **SQLite** for managing movies.
This project demonstrates how to perform CRUD operations (Create, Read, Update, Delete) on movie data.

---

## 🚀 Features

* Add new movies
* Retrieve all movies or a single movie by ID
* Update existing movie details
* Delete a movie
* Lightweight SQLite database
* Input validation using `express-validator`

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **SQLite** (using `sqlite3` or `sequelize`)
* **express-validator** for validation
* **dotenv** for environment variables

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

3. **Create the database**
   You can initialize your SQLite database manually or automatically through your code.

4. **Run the server**

   ```bash
   npm start
   ```

   The server will start (usually at **[http://localhost:3000](http://localhost:3000)**).

---

## 🔗 API Endpoints

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| GET    | `/api/movies`     | Get all movies  |
| GET    | `/api/movies/:id` | Get movie by ID |
| POST   | `/api/movies`     | Add a new movie |
| PUT    | `/api/movies/:id` | Update a movie  |
| DELETE | `/api/movies/:id` | Delete a movie  |

---

## 🧩 Example JSON

### POST `/api/movies`

```json
{
  "name": "Inception",
  "genre": "Sci-Fi",
  "releaseDate": "2010-07-16"
}
```

---

## 🧪 Validation

Requests are validated using **express-validator** to ensure:

* `name` is not empty
* `genre` is not empty
* `releaseDate` is a valid date

---

## 📁 Project Structure

```
Movies_api/
│
├── models/
│   └── movie.js
├── routes/
│   └── movieRoutes.js
├── controllers/
│   └── movieController.js
├── db/
│   └── database.sqlite
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

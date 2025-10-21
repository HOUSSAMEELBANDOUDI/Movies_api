import express from "express";
import morgan from "morgan";
import { initDB } from "./utils/db.js";
import { User } from "./models/index.js";
import authRouter from "./routes/auth.routes.js"
import moviesRouter from "./routes/movies.routes.js"
import reviewsRouter from "./routes/reviews.routes.js"
import { createDefaultAdmin } from "./utils/admin.js";
import dotenv from "dotenv";
dotenv.config();


initDB().then(() =>{
    createDefaultAdmin()
});

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome To Movie Api"});
})

app.use("/api/auth", authRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/reviews", reviewsRouter);

app.use((req, res) => {
    res.status(404).json({error: "Not found"});
})

app.use((err,req, res, next) => {
    console.error(err.message);
    res.status(500).json({error: "Something Went Wrong"});
})


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
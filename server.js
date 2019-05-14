const express = require("express");
const connectDB = require("./config/db");

const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const moviedb = require("./routes/api/moviedb");

const app = express();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect Database
connectDB();

// Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/moviedb", moviedb);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

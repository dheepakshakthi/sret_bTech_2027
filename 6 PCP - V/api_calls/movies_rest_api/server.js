import express from "express";
import dotenv from "dotenv";
import { moviesList } from "./config/db.js";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const movies = moviesList;

const PORT = process.env.PORT || 5050;

app.use(express.json()); // middleware to read JSON body

// STATIC ENDPOINT - return all movies
app.get("/api/movies", (req, res) => {
  if (movies.length == 0) {
    return res.status(400).json({ message: "Movies not found" });
  }

  res.json({ movies });
});

// SEARCH ENDPOINT - filter movies using query parameter
// example: /api/movies/search?genre=action
app.get("/api/movies/search", (req, res) => {
  const { genre } = req.query;

  const filteredMovies = movies.filter((movie) =>
    movie.genre.find((g) => g.toLowerCase() === genre.toLowerCase()),
  );

  if (filteredMovies.length === 0) {
    return res.status(400).json({ message: "Movies not found" });
  }

  res.json({ filteredMovies });
});

// PUBLIC ENDPOINT - generate JWT token
app.post("/api/movies/public/token", (req, res) => {
  const { uniqueId, set } = req.body;

  const token = jwt.sign({ uniqueId }, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });

  const dataUrl = "/private/movies";

  res.json({ token, dataUrl });
});

// PRIVATE ENDPOINT - requires JWT token
app.get("/api/movies/private/movies", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.uniqueId && movies.length == 0) {
      return res.status(400).json({ message: "Movies not found" });
    }

    res.json({ movies });
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});

// DYNAMIC ENDPOINT - get movie using id
// example: /api/movies/tt0114709
app.get("/api/movies/:id", (req, res) => {
  const { id } = req.params;

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(400).json({ message: `Movie not found ${id}` });
  }

  res.json({ movie });
});

app.listen(PORT, () => {
  console.log(`Server is running @${PORT}`);
});

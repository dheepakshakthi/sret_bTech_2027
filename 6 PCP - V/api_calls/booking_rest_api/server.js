import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6060;

const BASE_URL = "http://localhost:5050/api/movies";
let dataSet = [];

// INITIAL LOAD - call protected API using JWT
const loadData = async () => {
  try {
    // PUBLIC CALL - send request body
    const response = await axios.post(`${BASE_URL}/public/token`, {
      uniqueId: "e011233",
      set: "setA",
    });

    const { token, dataUrl } = response.data;

    // PRIVATE CALL - send JWT token in headers
    const response2 = await axios.get(`${BASE_URL}${dataUrl}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dataSet = response2.data;

    // start server after successful API calls
    app.listen(PORT, () => {
      console.log(`Server is running @${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

loadData();

// STATIC API CALL - get all movies
app.get("/api/booking/getMovies", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);

    res.json({ movies: response.data.movies });
  } catch (err) {
    res.json({ err: err.response.data.message });
  }
});

// DYNAMIC API CALL - get movie by id
app.get("/api/booking/getMovieById", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/tt0114709`);

    res.json({ movies: response.data.movie });
  } catch (err) {
    res.json({ err: err.response.data.message });
  }
});

// SEARCH API CALL - query parameters
app.get("/api/booking/searchMovie", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { genre: "action" },
    });

    res.json({ movies: response.data.filteredMovies });
  } catch (err) {
    res.json({ err: err.response.data.message });
  }
});

import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/news', async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=3f19eb578b8a4e06a1e026c834c74472");
    const responseData = response.data; // Extracting the response data
    res.send(responseData); // Sending the JSON data as the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get('/api', async (req, res) => {
  console.log(req.query); // Use req.query to access parsed query parameters
  let url = "https://newsapi.org/v2/everything?" + new URLSearchParams(req.query);
  try {
    let r = await axios(url);
    let a = r.data;
    res.send(a); // Sending the JSON data as the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

export default router;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

app.post("/api/rsvp", async (req, res) => {
  const { name, guests } = req.body;
  try {
    await pool.query("INSERT INTO rsvps (name, guests) VALUES ($1, $2)", [name, guests]);
    res.status(201).json({ message: "RSVP recorded!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

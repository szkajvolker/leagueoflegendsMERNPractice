import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import championRoutes from "./routes/champion.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json());
app.use(cors());

app.use("/api/champs", championRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});

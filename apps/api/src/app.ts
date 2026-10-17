import express from "express"
import helmet from "helmet";
import cors from "cors"
import { pool } from "./lib/db.js";

export const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:5173" }));
app.use(express.json({ limit: "100kb" }));

app.get("/api/v1/health/db", async (req, res) => {
    const result = await pool.query("SELECT NOW()")
    res.json({ database: "ok", time: result.rows[0].now });

})
app.get("/api/v1/health", (req, res) => {
    res.json({ status: "ok" })
})
app.get("/api/v1/hello", (req, res) => {
    res.json({
        message: "welcome israa"
    })
})
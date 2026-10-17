import express from "express"
import helmet from "helmet";
import cors from "cors"

export const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:5173" }));
app.use(express.json({ limit: "100kb" }));

app.get("/api/v1/health", (req, res) => {
    res.json({ status: "ok" })
})
app.get("/api/v1/hello",(req,res)=>{
    res.json({
        message:"welcome israa"
    })
})
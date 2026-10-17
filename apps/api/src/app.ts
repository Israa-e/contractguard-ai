import express from "express"

export const app = express();


app.get("/api/v1/health", (req, res) => {
    res.json({ status: "ok" })
})
app.get("/api/v1/hello",(req,res)=>{
    res.json({
        message:"welcome israa"
    })
})

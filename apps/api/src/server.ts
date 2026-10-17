import "dotenv/config";
import express from "express"

const app = express()
const port:number =Number(process.env.PORT?? 3000);
app.get("/api/v1/health", (req, res) => {
    res.json({ status: "ok" })
})
app.get("/api/v1/hello",(req,res)=>{
    res.json({
        message:"welcome israa"
    })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

})
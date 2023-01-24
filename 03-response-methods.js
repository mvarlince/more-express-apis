import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
    app.use(express.json())
    app.use(cors())
dotenv.config()

const PORT = process.env.PORT

app.get('/redirect', (req, res) => {
    
})
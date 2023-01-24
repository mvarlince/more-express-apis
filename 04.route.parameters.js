import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import data from "./data/data-mock.json" assert {type: "json"}
dotenv.config()


const app = express()
    app.use(express.json())
    app.use(cors())
dotenv.config()

const sirport = process.env.PORT

app.listen(sirport, () =>{
    console.log(`listening on http://localhost:${sirport}`)
} )
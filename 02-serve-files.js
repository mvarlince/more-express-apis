import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
    app.use(express.json())
    app.use(cors())
dotenv.config()

const PORT = process.env.PORT

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("root")
})


app.get('/bottle', (req, res) => {
    const img = "/Users/vm/boca-code/week3/express-one-more-time/images/yano.gif"
    res.sendFile(img)
})

app.get('/redirect', (req, res) => {
    res.redirect("https://apple.com")
})


//serve images dir
// app.use('images',express.static('images'))

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})
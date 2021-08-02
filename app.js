const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const quotes = require("./quotes.json")

app.use(express.static(`${__dirname}/public`))

app.listen(port, () => {
    console.log("Server launched.")
})

app.get("/", (request, response) => {
    return response.sendFile(`${__dirname}/index.html`)
})

app.get("/api", (request, response) => {
    return response.sendFile(`${__dirname}/index.html`)
})

app.get("/api/all", (request, response) => {
    response.status(200).json(quotes)
})

app.get("/api/random", (request, response) => {
    var quote = (quotes[Math.floor(Math.random() * quotes.length)])
    response.status(200).json(quote)
})

app.get("/api/id/:id", (request, response) => {
    var id = parseInt(request.params.id)
    var quote = quotes.find(q => q.id === id)
    response.status(200).json(quote)
})


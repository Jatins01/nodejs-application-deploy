import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080 // if PORT given otherwise i use 8080

app.get('/', (req, res) => {         //make root and recieve request and response
    return res.json({ msg: 'Hello from the server - CI/CD Test'}) //set response in json that gives message
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`)
})
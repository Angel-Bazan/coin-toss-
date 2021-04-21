const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())




app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')  //main page to app 
})

app.get('/js/main.js', (req, res) => {
  res.sendFile(__dirname + '/js/main.js')
})

app.get('/api/flip', (req, res) => {
  var random = Math.floor(Math.random() * 2)
  console.log(random)

  res.writeHead(200, { 'Content-Type': 'application/json' });
    const objToJson = {
        value:` ${random} `
    }
    res.end(JSON.stringify(objToJson))
})




app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
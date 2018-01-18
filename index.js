const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

const port = 7777;
app.listen(port, () => console.log(`Your app is listening on port ${port}`))

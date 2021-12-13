const express = require('express')
const bodyParser = require('body-parser')
const router = require('./Routers/router.js')
const app = express()
const PORT = 9000

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hoome Page')
})

app.use('/route', router)
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`)
})

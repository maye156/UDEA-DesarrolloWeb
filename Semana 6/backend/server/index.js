/*// Prueba conexión con express
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/

//conectar con mongo 

import {DBConnection} from './db.js';
import {port} from './config.js';
import app from './app.js'

DBConnection();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
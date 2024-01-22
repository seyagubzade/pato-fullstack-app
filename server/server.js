const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = 8080
const PatoProdsRouter = require("./routes/PatoProds.routes")

app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/`)
  .then(() => console.log('Connected!'));

app.use('/pato', PatoProdsRouter)


app.listen(PORT, ()=>{
    console.log(`connected to ${PORT}`)
})
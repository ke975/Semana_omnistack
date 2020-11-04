const express =require('express')
const app = express()
const mongoose= require('mongoose')
const routes = require('./routes')



mongoose.connect('mongodb+srv://kevincastillo:kevcastle1@cluster0.1j8jy.mongodb.net/kevacstle?retryWrites=true&w=majority',{

    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())

app.use(routes)


app.listen(3333)
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();

mongoose.connect("mongodb+srv://samarthgupta1202:bXzIVGZ6VSiLdZ9L@cluster0.ptsbhlw.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>console.log("Connection established")).then(()=>{
    app.listen(5000);
}).catch(err => console.log(err))

//Middlewares

app.use(express.json())
app.use("/books", router) //localhost:5000/books

// bXzIVGZ6VSiLdZ9L
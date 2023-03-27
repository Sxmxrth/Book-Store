const express = require('express');
const router = express.Router();
const Book = require("../model/Book")
const bookController = require("../controllers/book-controller")

router.get("/", bookController.getAllBooks )


module.exports  =  router;
const express = require('express');
const router = express.Router();
const Book = require("../model/Book")
const bookController = require("../controllers/book-controller")

router.get("/", bookController.getAllBooks );
router.post("/", bookController.addBooks );
router.get("/:id", bookController.getByID);
router.put("/:id", bookController.updateBook)
router.delete("/:id", bookController.deleteBook)

module.exports = router;
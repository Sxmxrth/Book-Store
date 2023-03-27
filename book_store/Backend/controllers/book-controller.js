const Book = require("../model/Book")

const getAllBooks = async (req, res, next) => {
    // This route provides all the books
    let books;
    try{
        books = await Book.find();
    } catch{
        console.log(err);
    }

    if(!books){
        return res.status(404).json({message : "No products found"})
    }
    return res.status(200).json({books})
}

exports.getAllBooks = getAllBooks;
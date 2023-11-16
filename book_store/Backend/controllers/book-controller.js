const { Book } = require('../model/Book')

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

const addBooks = async (req, res, next) => {
    //  This route adds all books
    const {name, author, description, price, available, image} = req.body;
    let book;
    console.log(name);
    console.log(author);
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
        })
        await book.save();
        console.log(book);
    }catch(err){
        console.log(err);
    }
    
    if(!book){
        return res.status(404).json({message : "Unable to add books"})
    }
    return res.status(200).json({book})
     
}

const getByID = async (req, res, next) => {

    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    } catch(err){
        console.log(err);
    }

    if(!book){
        return res.status(404).json({message : "No book found"})
    }
    return res.status(200).json({book})
}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image, 
        })
        book = await book.save();
    } catch(err){
        console.log(err);
    }
    
    if(!book){
        return res.status(404).json({message : "Unable to find book"})
    }
    return res.status(200).json({book})
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try{
        book = await Book.findByIdAndDelete(id)
    } catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message : "Unable to find book"})
    }
    return res.status(200).json({book})

}



module.exports.getAllBooks = getAllBooks; // this exports the object with getAllBooks function
module.exports.addBooks = addBooks;
module.exports.getByID = getByID;
module.exports.updateBook = updateBook;
module.exports.deleteBook = deleteBook;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    available : {
        type : Boolean,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : false
    }
})

const categorySchema = new Schema({
    name : {
        type : String,
        required : true
    },
})

const Book = mongoose.model("Book", bookSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = {
  Book,
  Category
};

 //Book => books
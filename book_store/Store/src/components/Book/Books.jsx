import React, { useEffect, useState } from 'react'
import axios from "axios"
import Book from './Book'
import "./Book.css"
const URL = "http://localhost:5000/books"

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {                           //side effects
        fetchHandler().then((data) => setBooks(data.books))  //this .books is from the array
    },[])
    console.log(books);
  return (
    <div>
      <ul>{books && books.map((book, i) => {
        return(<li key = {i}>
          <Book book = {book} />
        </li>)
      })}
      </ul>
    </div>
  ) 
}

export default Books


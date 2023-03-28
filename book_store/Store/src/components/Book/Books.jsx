import React, { useEffect, useState } from 'react'
import axios from "axios"
const URL = "http://localhost:5000/books"

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {                           //side effects
        fetchHandler().then((data) => setBooks(data))
    },[])
    console.log(books);
  return (
    <div>
      Books
    </div>
  )
}

export default Books

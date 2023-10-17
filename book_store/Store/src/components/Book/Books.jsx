import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Book from './Book';
import './Book.css';

const URL = 'http://localhost:5000/books';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks(); // Fetch books when the component mounts
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(URL);
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const displayedBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <TextField
          type="search"
          id="search"
          label="Search"
          sx={{ width: 400 }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Display book list */}
      </Container>
      <ul>
          {displayedBooks.length === 0 ? (
            <p>No books found.</p>
          ) : (
            displayedBooks.map((book) => (
              <li key={book._id}><Book book={book} /></li>
            ))
          )}
        </ul>
      {/* <ul>
        {books.map((book, i) => (
          <li key={i}>
            <Book book={book} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Books;

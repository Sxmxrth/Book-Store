import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Book.css"
const Book = (props) => {
    const history = useNavigate()
    const {_id, name, author, description, price, image, category } = props.book;
    const deleteBook = async() => {
        return await axios.delete(`http://localhost:5000/books/${_id}`).then(res => res.data).then(() => history("/")).then(() => history("/books"))
    }
    return (
        <div className='card'>
            <img className='bookImg' src={image} alt = {name}/>
            <article>By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>Rs. {price}</h3>
            <h3>{category}</h3>
            <Button LinkComponent={Link} to = {`/books/${_id}`} sx = {{mt : "auto"}}>Update</Button>
            <Button onClick={deleteBook} sx = {{mt : "auto"}}>Delete</Button>
        </div>
    )
}

export default Book

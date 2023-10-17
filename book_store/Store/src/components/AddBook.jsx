import React, { useState, useEffect } from 'react';
import { Button, Checkbox, FormControlLabel, FormLabel, TextField, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    name: '',
    author: '',
    description: '',
    price: '',
    image: '',
    category: '', // Add category property
  });

  const [checked, setChecked] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCategoryChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      category: e.target.value, // Update category field in input state
    }));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books/categories/find");
        const categoryNames = response.data.categories.map((category) => category.name);
        console.log(categoryNames);
        console.log("Fetched categories:", categoryNames);
        setCategories(categoryNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array to fetch categories only once on component mount

  const sendRequest = async () => {
    const formData = {
      name: String(input.name),
      author: String(input.author),
      description: String(input.description),
      price: Number(input.price),
      image: String(input.image),
      available: Boolean(checked),
      category: String(input.category), // Include the selected category
    };

    try {
      const response = await axios.post("http://localhost:5000/books", formData);
      return response.data;
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", input, checked);
    const response = await sendRequest();
    if (response) {
      // Redirect to the desired page after successful submission
      history("/books");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth="700px" alignContent={"center"} marginLeft="auto" marginRight={"auto"} marginTop="10px">
          <FormLabel>Name</FormLabel>
          <TextField value={input.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' required></TextField>
          <FormLabel>Author</FormLabel>
          <TextField value={input.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' required></TextField>
          <FormLabel>Description</FormLabel>
          <TextField value={input.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' required></TextField>
          <FormLabel>Price</FormLabel>
          <TextField value={input.price} onChange={handleChange} type={"number"} margin='normal' fullWidth variant='outlined' name='price' required></TextField>
          <FormLabel>Image</FormLabel>
          <TextField value={input.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' required></TextField>
          <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
          <br />
          <FormLabel>Category</FormLabel>
          <Select
            value={input.category}
            onChange={handleCategoryChange}
            name="category"
            fullWidth
            variant="outlined"
            required
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          <br />

          <Button variant='contained' type='submit'>Add Book</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;

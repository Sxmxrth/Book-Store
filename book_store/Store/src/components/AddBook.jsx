import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const history = useNavigate()
  const [input, setInput] = useState({
    name : '',
    author : '',
    description : '',
    price : '',
    image : ''
  })

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/books", {
      name : String(input.name),
      author : String(input.author),
      description : String(input.description),
      price : Number(input.price),
      image : String(input.image),
      available : Boolean(checked)
    }).then(res => res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, checked);
    sendRequest().then(() => history("/books"))
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
      <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth="700px" alignContent={"center"} marginLeft="auto" marginRight={"auto"} marginTop="10px">
        <FormLabel>Name</FormLabel>
        <TextField value={input.name} onChange = {handleChange} margin='normal' fullWidth variant='outlined' name='name'></TextField>
        <FormLabel>Author</FormLabel>
        <TextField value={input.author} onChange = {handleChange} margin='normal' fullWidth variant='outlined' name='author'></TextField>
        <FormLabel>Description</FormLabel>
        <TextField value={input.description} onChange = {handleChange} margin='normal' fullWidth variant='outlined' name='description'></TextField>
        <FormLabel>Price</FormLabel>
        <TextField value={input.price} onChange = {handleChange} type={"number"} margin='normal' fullWidth variant='outlined' name='price'></TextField>
        <FormLabel>Image</FormLabel>
        <TextField value={input.image} onChange = {handleChange} margin='normal' fullWidth variant='outlined' name='image'></TextField>
        <FormControlLabel control={<Checkbox checked = {checked} onChange = {() => setChecked(!checked)} />} label="Available" />

        <Button variant='contained' type='submit' >Add Book</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddBook

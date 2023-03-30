import React, { useState } from 'react'
import {AppBar, Tabs, Tab, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from "react-router-dom"

const Header = () => {
    const [value, setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor : '#2E4053'}} position='sticky'>
        <Toolbar >
        <NavLink to = "/" style = {{color : "white"}}>
            <Typography><LibraryBooksIcon/></Typography>
            </NavLink>
            <Tabs textColor='inherit' indicatorColor='primary' value={value} onChange = {(e, val) => setValue(val)} sx={{ml : 'auto'}}>
                <Tab label = 'Add Book' LinkComponent={NavLink} to = "/add" />
                <Tab label = 'Books' LinkComponent={NavLink} to = "/books"/>
                <Tab label = 'About Us' LinkComponent={NavLink} to = "/about"/>
            </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header

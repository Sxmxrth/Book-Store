import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button LinkComponent={Link} to="/books" variant='contained' sx = {{marginTop: 15, background: 'orangered'}}>
          <Typography variant='h3'>View All Books</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home
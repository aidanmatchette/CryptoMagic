import { Button } from '@mui/material'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <h1></h1>
      <Button size='large' variant="contained" href="#/dashboard"
      sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'} }} disableElevation>
      Add a Portfolio</Button> 
    </div>
  )
}

export default Portfolio
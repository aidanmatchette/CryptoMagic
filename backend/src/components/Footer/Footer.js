import { AppBar, Button, Container, FormControl, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <AppBar color='transparent' position='static'>
        <Container >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', height: 100}}>
                <Typography onClick={() => navigate('/')} sx={{fontWeight: 'bold', fontSize:30, cursor: 'pointer'}}>CryptoMagic</Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', marginLeft: 5 }}>
                        <Button onClick={() => navigate('/dashboard')} size='large' 
                        sx={{color: 'black'}}>
                        Dashboard</Button>
                    </Box> 

            
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Footer
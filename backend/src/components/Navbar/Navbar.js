import { AppBar, Container, MenuItem, Select, Toolbar, Typography, FormControl, InputLabel, Box, Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CryptoState } from '../../Context'
import dashboardAPI from '../../api/dashboardAPI'

const Navbar = () => {

    const navigate = useNavigate()   

    const {currency,setCurrency, isAuthenticated, setIsAuthenticated, setActiveUser} = CryptoState();

    const logOut = async () => {
        console.log('-------log out --------')
        try {
            const response = await axios.post('/logout/', null, {headers: {'X-CSRFToken': dashboardAPI.getCSRFToken()}})
            setIsAuthenticated(false)
            // setActiveUser('')
    
        } catch (e) {
            console.log(e.response.data)
        }
    }

  return (
    <AppBar color='transparent' position='static'>
        <Container >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography onClick={() => navigate('/')} sx={{fontWeight: 'bold', fontSize:30, cursor: 'pointer'}}>CryptoMagic</Typography>
                    <Box sx={{ justifyContent: 'flex-end', display: 'flex', marginLeft: 5 }}>
                        <Button onClick={() => navigate('/dashboard')} size='large' 
                        sx={{color: 'black'}}>
                        Dashboard</Button>
                    { isAuthenticated && 
                          <Button onClick={() => navigate('/portfolio')} size='large' 
                          sx={{color: 'black'}}>
                          My Portfolios</Button>
                      }
                        <Button onClick={() => navigate('/login')} size='large' 
                        sx={{color: 'black'}}>
                        Log In</Button> 
                    </Box> 
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', marginRight: '5px'}}>
                    { isAuthenticated && 
                          <Button onClick={logOut} variant='contained' size='large' 
                          sx={{color: 'white', justifyContent: 'flex-end', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'}}}>
                          Log Out</Button>
                      }
                    </Box> 

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-standard-label">Currency</InputLabel>
                    <Select
                    labelId="select-standard-label"
                    id="select-standard"
                    value={currency}
                    onChange={(event) => setCurrency(event.target.value)}
                    label="Currency"
                    >
                    <MenuItem value={'usd'}>USD</MenuItem>
                    <MenuItem value={'eur'}>EUR</MenuItem>
                    <MenuItem value={'jpy'}>JPY</MenuItem>
                    <MenuItem value={'gbp'}>GBP</MenuItem>
                    <MenuItem value={'cad'}>CAD</MenuItem> 

                    </Select>
                </FormControl>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar



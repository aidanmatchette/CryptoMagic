import { AppBar, Container, MenuItem, Select, Toolbar, Typography, FormControl, InputLabel, Box, Button } from '@mui/material'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CryptoState } from '../../Context'

const Navbar = () => {

    const navigate = useNavigate()   

    const {currency,setCurrency, isAuthenticated} = CryptoState();

  return (
    <AppBar color='transparent' position='static'>
        <Container >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography onClick={() => navigate('/')} sx={{fontWeight: 'bold', fontSize:30, cursor: 'pointer'}}>CryptoMagic</Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', marginLeft: 5 }}>
                        <Button onClick={() => navigate('/dashboard')} size='large' 
                        sx={{color: 'black'}}>
                        Dashboard</Button>
                    { isAuthenticated && 
                          <Button onClick={() => navigate('/portfolio')} size='large' 
                          sx={{color: 'black'}}>
                          My Portfolios</Button>
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


{/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
<IconButton
  size="large"
  aria-label="account of current user"
  aria-controls="menu-appbar"
  aria-haspopup="true"
  onClick={handleOpenNavMenu}
  color="inherit"
>
  <MenuIcon />
</IconButton>
<Menu
  id="menu-appbar"
  anchorEl={anchorElNav}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    display: { xs: 'block', md: 'none' },
  }}
>
  {pages.map((page) => (
    <MenuItem key={page} onClick={handleCloseNavMenu}>
      <Typography textAlign="center">{page}</Typography>
    </MenuItem>
  ))}
</Menu>
</Box> */}

{/* <Box sx={{ flexGrow: 1, display: 'flex', marginLeft: 5 }}>
<IconButton>Dashboard</IconButton>
<Menu
id="menu-appbar"
anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
}}
keepMounted
transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
}}
sx={{
    display: { xs: 'block', md: 'none' },
}}
>    
<MenuItem  onClick={() => navigate('/dashboard')}>
    <Typography textAlign="center">Dashboard</Typography>
</MenuItem>
</Menu>
</Box> */}
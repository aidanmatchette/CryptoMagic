import { AppBar, Container, MenuItem, Select, Toolbar, Typography, FormControl, InputLabel } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { CryptoState } from '../../Context'

const Navbar = () => {

    const navigate = useNavigate()   

    const {currency,setCurrency} = CryptoState();

  return (
    <AppBar color='transparent' position='static'>
        <Container >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography onClick={() => navigate('/')} sx={{fontWeight: 'bold', fontSize:30, cursor: 'pointer'}}>CryptoMagic</Typography>
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
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, TextField } from '@mui/material'
import cryptoMagicAPI from '../../api/cryptoAPI'
import getPortfoliosByUser from '../../Context.js'
import React, { useState } from 'react'
import { CryptoState } from '../../Context'

const NewPortfolio = ({setAddPortfolio}) => {
    const {setUserPortfolios} = CryptoState();
    const [open, setOpen] = useState(true);

    const getPortfoliosByUser = async () => {
        const portfolios = await cryptoMagicAPI.listPortfoliosByUser()
        setUserPortfolios(portfolios)
    }

    const handleNewPortfolio = async (event) => {
        event.preventDefault()
        setOpen(false)
        const newPortfolioForm = {
            portfolio_name: event.target.elements['name'].value,
            owner: localStorage.getItem('user_id'), 
            holdings: []
        }
        const data = await cryptoMagicAPI.createPortfolio(newPortfolioForm)
        if(data) {
            setAddPortfolio(false)
            getPortfoliosByUser()
        }
    }
    const handleClose = () => {
        setOpen(false)
        setAddPortfolio(false)
    }

    return (
        <div>
            <Dialog fullWidth={true}
            maxWidth={'sm'}
            disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Create a new portfolio to track all of your crypto coins</DialogTitle>
            {/* <form onSubmit={handleNewPortfolio}> */}
                <DialogContent>
                        <Box component="form" name='newPortfolio' onSubmit={handleNewPortfolio} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
                        <FormControl sx={{ m: 1, minWidth: 120, width: 300 }}>
                            <TextField
                                label="Enter your new portfolio name"
                                fullWidth
                                autoFocus
                                name='name'
                                required
                            />
                        </FormControl>
                        </Box>
                </DialogContent>
                <DialogActions>
                    <Button sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'}}} onClick={() => setAddPortfolio(false)}>Cancel</Button>
                </DialogActions>
            {/* </form> */}
            </Dialog>    
        </div>
    )
}

export default NewPortfolio



{/* <Grid item xs={12} sm={6}>
<form onSubmit={handleNewPortfolio}>
    <TextField
        label="Enter your portfolio name"
        fullWidth
        autoFocus
        name='name'
        required
        helperText={'Add a portfolio name'}
    />
    <Button type="submit" variant='container' color="primary" raised>
        Create
    </Button>
    <Button color='success'onClick={() => setAddPortfolio(false)}>Close</Button>
</form>
</Grid> */}
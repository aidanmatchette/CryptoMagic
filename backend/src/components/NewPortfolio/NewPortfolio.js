import { Button, Grid, TextField } from '@mui/material'
import cryptoMagicAPI from '../../api/cryptoAPI'

import React from 'react'

const NewPortfolio = ({setAddPortfolio}) => {


    const handleNewPortfolio = async (event) => {
        event.preventDefault()
        console.log('event -----', event.target.elements)
        const newPortfolioForm = {
            portfolio_name: event.target.elements['name'].value,
            holdings: []
        }
        console.log('this is a test')
        const data = await cryptoMagicAPI.createPortfolio(newPortfolioForm)
        if(data) {
            console.log('------data-----', data)
            console.log('success')
            console.log('yes');
        }
    }

    return (
        <div>
            <h1> this is new portfolio</h1>
        
            <Grid item xs={12} sm={6}>
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
            </Grid>
    </div>
    )
}

export default NewPortfolio
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'
import cryptoMagicAPI from '../../api/cryptoAPI';
import { CryptoState } from '../../Context'

const AddCoin = ({setIsAdded, coinName, id}) => {
    const {userPortfolios} = CryptoState();
    const [portfolioToAdd, setPortfolioToAdd] = useState(null)
    const [open,setOpen] = useState(true)

    const portfolioOptions = userPortfolios?.map((portfolio, index) => {
        return(
            <option key={`${portfolio.portfolio_name}-${index}`} value={portfolio.id}>{portfolio.portfolio_name}</option>
        )
    })
    const handleChange = (event) => {
        setPortfolioToAdd(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        setOpen(false)

        let addCoinForm = {
            portfolio: portfolioToAdd,
            coin_id: id
        }
        const data = await cryptoMagicAPI.addCoinToPortfolio(addCoinForm)
        if (data) {
            setIsAdded(false)
        }
    }
    const handleClose = () => {
        setOpen(false)
        setIsAdded(false)
    }
  return (
    <div>
    <Dialog fullWidth={true}
        maxWidth={'sm'}
        disableEscapeKeyDown open={open} onClose={handleClose}>
      <DialogTitle>Select which portfolio to add {coinName} too</DialogTitle>
        <form onSubmit={handleSubmit}>
            <DialogContent>
                    <Box component="form" name='newCoin' onSubmit={handleSubmit} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel htmlFor="demo-dialog-native">Portfolios</InputLabel>
                        <Select
                        native
                        onChange={handleChange}
                        input={<OutlinedInput label="Portfolio" id="portfolio-dialog-native" sx={{width: 200, alignItems: 'center'}}/>}
                        >
                            <option value='None'>None</option>
                            {portfolioOptions}
                        </Select>
                    </FormControl>
                    </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'}}}>Cancel</Button>
                <Button type='submit' for='newCoin'sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'}}} >Ok</Button>
            </DialogActions>
        </form>

    </Dialog>
  </div>
  )
}

export default AddCoin
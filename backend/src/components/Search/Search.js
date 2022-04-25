import { TextField } from '@mui/material'
import React from 'react'
import './search.css'

const Search = ({setSearch, setSearchPortfolio}) => {

    const handleChange = (event) => {
        setSearch(event.target.value)
        setSearchPortfolio(event.target.value)
      }

    return (
        <div className='search-text'>
            <TextField label="Search for a coin" sx={{ width: 1000, ":hover": {
            boxShadow: 6}}} onChange={handleChange}  focused />

        </div>
    )
}

export default Search
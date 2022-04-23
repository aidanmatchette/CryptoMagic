import { TextField } from '@mui/material'
import React from 'react'
import './search.css'

const Search = ({setSearch}) => {

    const handleChange = (event) => {
        setSearch(event.target.value)
      }

    return (
        <div className='search-text'>
            <TextField label="Search for a coin" sx={{ width: 1000, ":hover": {
      boxShadow: 6,
    }}} onChange={handleChange}  focused />
            {/* <h3>Search for a coin</h3>
            <form>
            <input type='text' onChange={handleChange} placeholder='Search' className='search-input' />
            </form> */}
        </div>
    )
}

export default Search
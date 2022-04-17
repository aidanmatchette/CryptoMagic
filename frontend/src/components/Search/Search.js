import React from 'react'

const Search = ({setSearch}) => {

    const handleChange = (event) => {
        setSearch(event.target.value)
      }

    return (
        <div className='search-text'>
            <h3>Search for a coin</h3>
            <form>
            <input type='text' onChange={handleChange} placeholder='Search' className='search-input' />
            </form>
        </div>
    )
}

export default Search
import { autocompleteClasses, Container } from '@mui/material'
import { border, height } from '@mui/system'
import React from 'react'

const spaceImg = 'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

const Carousell = () => {
    const styles = {
        imageContainer: {
            backgroundImage: `url(${spaceImg})`,
            height:500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }
    }
  return (
    <div>
        <Container style={styles.imageContainer}>
            <div className='crypto'>

            </div>
        </Container>
    </div>
  )
}

export default Carousell


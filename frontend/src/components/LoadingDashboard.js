import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

const LoadingDashboard = () => {
  return (
    <>
        <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <CircularProgress color="primary" />
        </Backdrop>
    </>
  )
}

export default LoadingDashboard
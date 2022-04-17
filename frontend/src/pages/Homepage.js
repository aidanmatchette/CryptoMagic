import React from 'react'
import './css/homepage.css'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';






const Homepage = () => {
  return (
    <>
        <div className='header-section hp-section'>
            <div className='header-container hp-container'>
                <div className='header-flex'>
                    <div className='header-logo'>
                        <h2>CRYPTOMAGIC</h2>
                        <div className='git-hub'>
                            <a target='_blank' href='https://github.com/aidanmatchette'><GitHubIcon sx={{color: 'white', fontSize: '40px'}}></GitHubIcon></a>
                        </div>
                    </div>
                    <div className='header-content'>
                        <div className='header-text'>
                            <h1>Create your Crytpo portfolio</h1>
                            <h5 className='description'>Start tracking all of your crypto assests securly in a matter of minutes!</h5>
                            <Button size='large' variant="contained" href="#/signup" 
                            sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'} }} disableElevation>
                            Create an account</Button>
                        </div>
                        <div className='header-content'>
                            <img className='image' src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" width="600" height="500"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='dashboard-section hp-section'>
            <div className='dashboard-container hp-container'>
                <div className='dashboard-flex'>
                    <div className='dashboard-content'>
                        <div className='dashboard-image'>
                            <img className='image' src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" width="600" height="500"/>
                        </div> 
                        <div className='dashboard-text'>
                            <h2 className='dashboard'>Dashboard</h2>
                            <h4 className='dashboard-description'>See what the current trends of your favorite Crypto coins are doing!</h4>
                            <Button size='large' variant="contained" href="#/dashboard"
                            sx={{color: 'white', background: 'purple', borderRadius: "10px", ":hover": {background: '#46016b'} }} disableElevation>
                            Dashboard</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
 
    </>
  )
}

export default Homepage
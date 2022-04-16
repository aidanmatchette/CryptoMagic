import './App.css';

//pages
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

//react components
import {useEffect, useState} from 'react'
import {HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>   
          <Route path='/dashboard' element={<Dashboard />}/>   
          <Route path='/signup' element={<SignupPage />}/>   
          <Route path='/login' element={<LoginPage />}/>   
        </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;

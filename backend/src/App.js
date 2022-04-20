import './App.css';

//pages
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CoinDetail from './pages/CoinDetail';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './pages/Portfolio';

//react components
import {useEffect, useState} from 'react'
import {HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [currency, setCurrency] = useState('usd')

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Navbar currency={currency} setCurrency={setCurrency}/>
        <Routes>
          <Route path='/' element={<Homepage />}/>   
          <Route path='/dashboard' element={<Dashboard />}/>   
          <Route path='/coin/:coinId' element={<CoinDetail />}/>   
          <Route path='/portfolio' element={<Portfolio />}/>   
          <Route path='/signup' element={<SignupPage />}/>   
          <Route path='/login' element={<LoginPage />}/>   
        </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;

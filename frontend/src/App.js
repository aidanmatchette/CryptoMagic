import './App.css';

//pages
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CoinDetail from './pages/CoinDetail';
import Navbar from './components/Navbar/Navbar';

//react components
import {useEffect, useState} from 'react'
import {HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
console.log('test')
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
          <Route path='/signup' element={<SignupPage />}/>   
          <Route path='/login' element={<LoginPage />}/>   
        </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;

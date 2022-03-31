import React from 'react'

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeadNav from './Component/HeadNav';
import HomeHeader from './Component/HomeHeader';

import Coins from './Coins';

import CoinsDeTails from './CoinsDeTails';


function App() {
  return (
    
    <BrowserRouter>


       <div className="App container-fluid">
          <HeadNav />
    </div>

    <Routes>
    <Route  element={<HomeHeader />} path='/'/>
    <Route  element={<Coins />} path='/coins'/>
    <Route  element={<CoinsDeTails />} path='/coin/:uuid'/>

    </Routes>


    </BrowserRouter>

  );
}

export default App;

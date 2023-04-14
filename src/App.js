import React, { useState, useEffect } from "react";
import axiox from 'axios';
import { Routes, Rout, Route } from "react-router-dom";

import Coins from './components/Coins';
import NavBar from "./components/NavBar";
import Coin from './routes/Coin';
function App() {
  // coins an array of coins are live in data
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';


  useEffect(() => {
    axiox.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;

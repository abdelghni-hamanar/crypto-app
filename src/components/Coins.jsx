import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'
import './Coins.css';

const Coins = (props) => {
    return (
        <div className='container'>
            <div className='heading'>
                <p className=''>#</p>
                <p className='coin-name'>Coin</p>
                <p className=''>Price</p>
                <p className=''>24H</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        <CoinItem coins={coins} />
                    </Link>

                )
            })}
        </div>
    )
}

export default Coins
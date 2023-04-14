import React from 'react'
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Panda <span className='purple'>Coins</span> </h1>
            </div>
        </Link>
    )
}

export default NavBar
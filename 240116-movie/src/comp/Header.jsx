import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BellIcon } from '../assets/bell.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

function Header(props) {
    return (<>
        <header>
            <Link to='/'><h1>SKYFLIX</h1></Link>
            <nav>
                <div className='left'>
                    <Link to='/'>HOME</Link>
                    <Link to='/'>SERISE</Link>
                    <Link to='/'>MOVIE</Link>
                    <Link to='/'>NEW</Link>
                </div>
                <div className='right'>
                    <Link to='/'><SearchIcon width="25" heigth="25" stroke="#ffffff" /></Link>
                    <Link to='/'><BellIcon width="20" heigth="20" fill="#ffffff" /></Link>
                </div>
            </nav>
        </header>
    </>
    );
}

export default Header;
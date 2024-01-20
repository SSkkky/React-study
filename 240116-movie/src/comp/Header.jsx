import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to='/'></Link>
                    <Link to='/'>☁</Link>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Header;
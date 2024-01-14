import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <header>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/css"> Css 활용 </Link>
                    <Link to="/image"> Image 활용 </Link>
                    <Link to="/router?num=4000" state={{ num: 100 }}> Router(페이지 이동) </Link>
                    <Link to="/props"> State&Props </Link>
                    <Link to="/deploy"> Github Deploy </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;
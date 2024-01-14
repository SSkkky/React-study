import { Link, Route, Routes, HashRouter } from 'react-router-dom';

import React from 'react';
import '../main.scss';
import Media from './Media';

function Home(props) {
    return (
        <div>
            <h2>OUR MEDIA LIBRARY</h2>
            <div className="home">
                <Link to="Media" state={'movies'}>
                    <div class="homeimg"></div>
                    <p>MOVIES</p>
                </Link>
                <Link to="Media" state={'music'}>
                    <div class="homeimg"></div>
                    <p>MUSIC</p>
                </Link>
                <Link to="Media" state={'apps'}>
                    <div class="homeimg"></div>
                    <p>APPS</p>
                </Link>
                <Link to="Media" state={'software'}>
                    <div class="homeimg"></div>
                    <p>SOFTWARE</p></Link>
            </div>
        </div>

    );
}

export default Home;
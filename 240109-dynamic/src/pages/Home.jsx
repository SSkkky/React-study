import { Link } from 'react-router-dom';

import React from 'react';
import '../main.scss';

function Home(props) {
    return (
        <div>
            <h2>OUR MEDIA LIBRARY</h2>
            <div className="home">
                <Link to="Media" state={'movies'}>
                    <div className="homeimg"></div>
                    <p>MOVIES</p>
                </Link>
                <Link to="Media" state={'music'}>
                    <div className="homeimg"></div>
                    <p>MUSIC</p>
                </Link>
                <Link to="Media" state={'apps'}>
                    <div className="homeimg"></div>
                    <p>APPS</p>
                </Link>
                <Link to="Media" state={'software'}>
                    <div className="homeimg"></div>
                    <p>SOFTWARE</p></Link>
            </div>
        </div>

    );
}

export default Home;
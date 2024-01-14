import React from 'react';
import json from '../data.json'
import { useNavigate } from 'react-router-dom';

function Home(props) {

    const data = json;
    const navigate = useNavigate();
    // const arrData = ['coffee', 'latte', 'juice', 'tea'];
    console.log(data.length)

    return (
        <div className='main-cont'>
            <h2 className='title main-title'>Cafe Menu</h2>
            <ul className='list-cont'>
                <li onClick={() => { navigate('/Product', { state: 'coffee' }) }}>
                    <p><img src={data.coffee[0].img} alt='coffee' /></p>
                    <p className='list-title'>coffee</p>
                </li>
                <li onClick={() => { navigate('/Product', { state: 'latte' }) }}>
                    <p><img src={data.latte[0].img} alt='latte' /></p>
                    <p className='list-title'>latte</p>
                </li>
                <li onClick={() => { navigate('/Product', { state: 'juice' }) }}>
                    <p><img src={data.juice[0].img} alt='juice' /></p>
                    <p className='list-title'>juice</p>
                </li>
                <li onClick={() => { navigate('/Product', { state: 'tea' }) }}>
                    <p><img src={data.tea[0].img} alt='tea' /></p>
                    <p className='list-title'>tea</p>
                </li>
            </ul>
        </div>
    );
}

export default Home;
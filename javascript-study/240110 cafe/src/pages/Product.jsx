import React, { useState, useEffect } from 'react';
import Item from '../component/Item'
import json from '../data.json'
import { useLocation, useNavigate } from 'react-router-dom';

function Product(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const data = json[location.state];
    // const [data, setData] = useState([]);

    // useEffect(function () {
    //     setData(json[location.state])
    // }, [location.state]);


    return (
        <div className='main-cont'>
            <div className='backto' onClick={() => { navigate('/') }}>←</div>
            <h2 className='title'>{location.state} Menu</h2>
            <ul className='list-cont'>
                {
                    data.map((el) => {
                        return <Item key={el.id} obj={el} />
                    })
                }
            </ul>
        </div>
    );
}

export default Product;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import json from '../data.json';
import Item from '../component/Item';
import { useLocation, useNavigate } from 'react-router-dom';


function Media(props) {
    const locate = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(function () {
        setData(json[locate.state])
    }, [locate.state]);

    return (
        <div className="container">
            <Link to="../"> ← </Link>
            <h2>{locate.state}</h2>
            <ul>
                {
                    data.map((obj, k) => {
                        return <Item key={obj.name} el={obj} />
                    })
                }
            </ul>
        </div >
    );
}

export default Media;
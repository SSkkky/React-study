import React from 'react';
import { useNavigate } from 'react-router-dom';

function Item({ el }) {
    const navigate = useNavigate();
    return (
        <li onClick={() => {
            navigate('/')
        }}>
            < img src={el.photo} ></img >
            <p>{el.name}</p>
        </li >
    );
}

export default Item;
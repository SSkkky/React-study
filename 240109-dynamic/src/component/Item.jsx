import React from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

function Item({ el, type }) {
    const Navigate = useNavigate();
    return (
        <li
            onClick={() => { Navigate(`/detail/${type}/${el.id}`) }}
        >
            < img src={el.photo} ></img >
            <p>{el.name}</p>
        </li >
    );
}

export default Item;
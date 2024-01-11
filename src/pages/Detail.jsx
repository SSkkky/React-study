import React from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
    const { id, type } = useParams(); // {id} = {id:'3545'}
    console.log(id, type)

    return (
        <li >
            Detail
        </li>
    );
}

export default Detail;
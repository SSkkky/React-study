import React from 'react';

function Item({ obj }) {
    return (
        <li className={`list ${obj.id}`}>
            <p>
                <img src={obj.img} alt='COFFEE' />
            </p>
            <p className='list-title'>{obj.name}</p>
        </li>
    );
}

export default Item;
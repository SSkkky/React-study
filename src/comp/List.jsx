import React from 'react';
import Item from './Item';

function List({ data, remove }) {

    const list = data.map((obj) => (
        <Item key={obj.id} obj={obj} remove={remove} />
    ))
    return (
        <ul className='list'>
            {list}
        </ul>
    );
}

export default List;
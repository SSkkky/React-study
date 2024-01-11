import React from 'react';

function List({ data }) {
    const list = data.map((obj) => (
        <li key={obj.id}>
            {obj.todo}
            <div className='btn'>
                <button>수정</button>
                <button>삭제</button>
                <button>완료</button>
            </div>
        </li>
    ))
    return (
        <ul className='list'>
            {list}
        </ul>
    );
}

export default List;
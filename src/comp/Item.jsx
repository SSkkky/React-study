import React, { useState } from 'react';

function Item({ obj, remove }) {
    const [isDone, setIsDone] = useState(false);
    function test() {
        setIsDone(!isDone)
    }

    return (
        <li key={obj.id} className={isDone && 'done'}>
            {obj.todo}
            <div className='btn'>
                <button>수정</button>
                <button onClick={() => { remove(obj.id) }}>삭제</button>
                <button onClick={test}>완료</button>
            </div>
        </li>
    );
}

export default Item;
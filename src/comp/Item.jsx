import React, { useState } from 'react';
//obj.state && 'done'
function Item({ obj, remove, isDone }) {
    return (
        // 조건문 ? 참일경우 : 거짓일경우
        <li key={obj.id} className={obj.state ? 'done' : ''}>
            {obj.todo}
            <div className='btn'>
                <button>수정</button>
                <button onClick={() => { remove(obj.id) }}>삭제</button>
                <button onClick={() => { isDone(obj.id) }}>완료</button>
            </div>
        </li>
    );
}

export default Item;
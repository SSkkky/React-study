import React, { useContext } from 'react';
import { Store } from './MyContext';

function Item({ children }) {

    const { state, dispatch } = useContext(Store);
    /*
    console.log('name : ', name)
    console.log('tel : ', tel)
    */
    return (
        <div>
            {children}
            {state.name}의 나이는 {state.age}세이고 전화번호는 {state.tel}입니다.
            <button onClick={() => { dispatch({ type: 'insert', name: '곰' }) }}>수정</button>
        </div>
    );
}

export default Item;
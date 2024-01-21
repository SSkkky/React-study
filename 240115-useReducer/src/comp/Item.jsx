import React, { useContext } from 'react';
import { Store } from './MyContext';

function Item({ children }) {

    let {state, dispatch} = useContext(Store);
    console.log(state, 'state')
    console.log(dispatch, 'dispatch')
    // [state] = state;
    //console.log(state) 아니 왜 또 빼야하는지 모르것네
    console.log(...state)
    return (
        <div>
            {children}
            {
                state.map((item, i)=>{
                    return <div key={i}>
                    {item.name}의 나이는 {item.age}세이고 전화번호는 {item.tel}입니다.
            <button onClick={() => { dispatch({
                type: 'insert',
            name: '곰',
            age: 30,
            tel: "010-1111-1111"
            }) }}>수정</button>
                    </div>
                })
            }
            
        </div>
    );
}

export default Item;
import React, { createContext, useReducer, useState } from 'react';

export const Store = createContext(null);

export function MyContext({ children }) {

    // 1) 데이터에 접근하기 위해 매개변수로 state를 가지고
    // 2) dispatch로 인자값을 action에 보냄
    function reducer(state, action) {
        switch (action.type) {
            case 'insert':
                return state = [
                        {
                            name: action.name,
                            tel: action.tel,
                            age: action.age
                        }   
                ]
        }
    }

    const [state, dispatch] = useReducer(
        reducer,
        [
            { name: '홍길동', tel: '010-0000-0000', age: 30 }
        ]
    )
    const value = { state, dispatch }
    // {노동 종류(type), 수정 데이터}
    // dispatch : 인자값을 action에 보냄
    // 여기있던 dispatch ㅇㅅㅇ)/ Item으로 이사감

    // ~로 어떤 일을 어떻게 한다!
    // dispatch를 이용해 action을 활용해 reducer함수로 넘어감
    // 와 대박 모르겟당ㅇㅅㅇ????

    //data, dispatch은 둘 다 {객체값}이므로 한번 더 괄호를 써서 걷어냄
    return (
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    );
}
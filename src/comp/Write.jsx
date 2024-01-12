import React, { useState } from 'react';
// { money, setMoney, txt, setTxt, combine }
function Write({ calculate }) {

    let [money, setMoney] = useState(0);
    let [txt, setTxt] = useState('');
    let today = new Date(),
        month = today.getMonth() + 1, //0부터 시작
        day = today.getDate(),
        todayDate = month + '.' + day;

    const combine = (flag) => {
        let data = {
            id: Date.now(),
            date: todayDate,
            money: flag == "deposit" ? +money : -money,
            message: txt,
        };
        console.log('combine : ', data)
        calculate(data);
    }

    return (
        <div className='pop-cont'>
            <h2>등록하기</h2>
            <input type="number"
                step="1000"
                id="pop-number"
                value={money}
                onChange={(e) => { setMoney(e.target.value) }}
            ></input>
            <input type="text"
                name="txt"
                id="pop-message"
                placeholder='메시지를 입력해주세요'
                value={txt}
                onChange={(e) => { setTxt(e.target.value) }}
            ></input>
            <div className="btn">
                <button onClick={() => { combine("deposit") }}>예금하기</button>
                <button onClick={() => { combine("withdraw") }}>출금하기</button>
            </div>
        </div>
    );
}

export default Write;
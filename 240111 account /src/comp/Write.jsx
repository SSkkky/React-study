import React, { useState } from 'react';
import { format } from 'date-fns';

function Write({ result, active, isActive }) {
    let [money, setMoney] = useState(0);
    let [txt, setTxt] = useState('');

    const today = new Date();
    const date = format(today, "MM.d");
    let saveBank = (m) => {
        let data = {
            id: new Date(),
            date: date,
            txt: txt,
            money: m === 'Y' ? +money : -money
        }
        result(data)
        console.log('data : ', data)
        // // props == 'Y' ? console.log('예금') : console.log('출금')
    }

    return (
        <div className="popup" style={{ display: active ? 'block' : 'none' }}>
            <button className="close-btn" onClick={() => { isActive(false) }}>x</button>

            <div className='pop-cont'>
                <h2>등록하기</h2>
                <input type="number" id="pop-number"
                    name="number" value={money}
                    onChange={(e) => { setMoney(e.target.value) }}></input>
                <input type="text" id="pop-message"
                    placeholder='메시지를 입력해주세요'
                    step="1000" value={txt}
                    onChange={(e) => { setTxt(e.target.value) }}></input>
                <div className="btn">
                    <button type="submit" onClick={() => { saveBank('Y') }}>예금하기</button>
                    <button type="submit" onClick={() => { saveBank('N') }}>출금하기</button>
                </div>
            </div>

        </div>
    );
}

export default Write;
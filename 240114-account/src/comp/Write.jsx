import React, { useState } from "react";

function Write({ active, setActive, printData}) {
  let [money, setMoney] = useState(0);
  let [message, setMessage] = useState('');

  // 버튼을 누르면 form의 정보를 data에 담아서 list에 뿌림
  function fnSubmit(a) {
    // a ? console.log('예금') : console.log('출금')
    let data = {
      id: new Date(),
      date: "01.14",
      money: a ? +money : -money,
      message: message
    };
    printData(data);
  }

  return (
    <div className="popup" style={{ display: active ? "block" : "none" }}>
      <button
        className="close-btn"
        onClick={() => {
          setActive(false);
        }}
      >
        ×
      </button>

      <div className="pop-cont">
        <h2>등록하기</h2>
        <input
          type="number"
          id="pop-number"
          name="number"
          value={money}
          onChange={(e)=>{setMoney(e.target.value)}}
        ></input>
        <input
          type="text"
          id="pop-message"
          placeholder="메시지를 입력해주세요"
          step="1000"
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
        ></input>
        <div className="btn">
          <button
            type="submit"
            onClick={() => {fnSubmit(true)}}
          >
            예금하기
          </button>
          <button
            type="submit"
            onClick={() => {fnSubmit(false)}}
          >
            출금하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Write;

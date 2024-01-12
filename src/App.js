import { useState } from 'react';
import './common.scss';
import Write from './comp/Write';

function App() {

  const [data, setData] = useState([]),
    [popState, setPopState] = useState(false),
    [total, setTotal] = useState(1000000)
  // let [money, setMoney] = useState(0);

  const calculate = (d) => {
    console.log(' calculate : ', data)
    let amount = Number(total) + d.money;
    setTotal(amount);
    setData(data);
  }
  // const combine = (flag) => {
  //   let data = {
  //     id: Date.now(),
  //     date: todayDate,
  //     money: flag == "deposit" ? +money : -money,
  //     message: txt,
  //   };
  //   console.log('data : ', data)
  //   let amount = Number(total) + data.money;
  //   setTotal(amount);
  //   setData(data);
  // }

  return (
    <article>
      <div className="bankbook">
        <button className="update-btn" onClick={() => { setPopState(!popState) }}>+</button>
        <div className="bank-total">
          <span>2024년 입출금 내역</span>
          <p className="total">{total}</p>
        </div>

        <div className="bank-list">
          <ul>
            {/* <Item key={data.id} data={data} /> */}
            {/* {
              data.map((obj) => {
                <Item key={obj.id} obj={obj} />
              })
            } */}
          </ul>
        </div>
      </div>

      {/* Write 팝업 */}
      <div className="popup" style={{ display: popState ? 'block' : 'none' }}>
        <button className="close-btn" onClick={() => { setPopState(!popState) }}>✕</button>
        {/* <Write
          money={money} setMoney={setMoney}
          txt={txt} setTxt={setTxt}
          combine={combine}
        /> */}
        <Write calculate={calculate} />
      </div>
    </article >

  );
}

export default App;

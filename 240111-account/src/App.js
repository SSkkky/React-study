import { useState } from 'react';
import './common.scss';
import List from './comp/List';
import Write from './comp/Write';

function App() {
  let [data, setData] = useState([]);
  let [totalMoney, setTotalMoney] = useState(0);
  let [active, setActive] = useState(false);

  let result = (d) => {
    setData([...data, d])
    setTotalMoney(totalMoney + d.money)
  }

  let isActive = (a) => {
    setActive(a)
  }

  return (
    <article>
      <div className="bankbook">
        <button className="update-btn" onClick={() => { isActive(true) }}>+</button>

        <div className="bank-total">
          <span>2024년 입출금 내역</span>
          <p className="total">{totalMoney.toLocaleString()}</p>
        </div>

        <List key={data.id} data={data} />
      </div>

      <Write result={result} active={active} isActive={isActive} />
    </article>

  );
}

export default App;

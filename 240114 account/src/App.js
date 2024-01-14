import { useState } from "react";

import List from "./comp/List.jsx";
import Write from "./comp/Write.jsx";
import "./common.scss";

function App() {
  let [data, setData] = useState([]);
  let [active, setActive] = useState(false);
  let [total, setTotal] = useState(0);

  function printData(d){
    let left = total + d.money;
    if(left<0){
      window.alert('출금할수없습니다!')
    } else{
      setTotal(left)
      setData([...data, d])
    }
  }

  return (
    <article>
      <div className="bankbook">
        <button
          className="update-btn"
          onClick={() => {
            setActive(true);
          }}
        >
          +
        </button>

        <div className="bank-total">
          <span>2024년 입출금 내역</span>
          <p className="total">{total}</p>
        </div>

        <List data={data}/>
      </div>

      <Write active={active} setActive={setActive} printData={printData}/>
    </article>
  );
}

export default App;

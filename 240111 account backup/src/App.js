import './common.scss';

function App() {
  return (
    <article>
      <div className="bankbook">
        <button className="update-btn">+</button>
        <div className="bank-total">
          <span>2024년 입출금 내역</span>
          <p className="total">35,000,000</p>
        </div>

        <div className="bank-list">
          <ul>
            <li>
              <div className="left">
                <span className="date">1.17</span>
                <p className="input-text">강남역 커피빈</p>
              </div>
              <p className="input-money">-5,200</p>
            </li>
            <li>
              <div className="left">
                <span className="date">1.17</span>
                <p className="input-text">강남역 커피빈</p>
              </div>
              <p className="input-money">-5,200</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="popup">
        <button className="close-btn">✕</button>

        <div className='pop-cont'>
          <h2>등록하기</h2>
          <input type="number" id="pop-number" name="number"></input>
          <input type="text" id="pop-message" placeholder='메시지를 입력해주세요' name=""></input>
          <div className="btn">
            <button type="submit">예금하기</button>
            <button type="submit">출금하기</button>
          </div>
        </div>
      </div>
    </article>

  );
}

export default App;

import React from "react";

function List({data}) {
  return (
    <div className="bank-list">
      <ul>
        {
          data.map((data)=>(
            <li>
            <div className="left">
              <span className="date">{data.date}</span>
              <p className="input-text">{data.message}</p>
            </div>
            <p className="input-money"
              style={{ color: data.money<0 ? "" : "#ff671a" }}
            >{data.money}</p>
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default List;

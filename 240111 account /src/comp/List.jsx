import React from 'react';

function List({ data }) {
    console.log(data) //들어옴
    return (
        <div className="bank-list">
            <ul>
                {
                    data.map((obj) => {
                        return <li>
                            <div className="left">
                                <span className="date">{obj.date}</span>
                                <p className="input-text">{obj.txt}</p>
                            </div>
                            <p className="input-money" style={{ color: obj.money < 0 ? "rgb(104, 114, 255);" : "rgb(255, 85, 127)" }}>{obj.money.toLocaleString()}</p>
                        </li>
                    })
                }
            </ul>
        </div >
    );
}

export default List;
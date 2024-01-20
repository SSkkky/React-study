import React from 'react';

function Item({ data }) {
    console.log("data :", data)
    return (
        // <></>
        data.map((d) => {
            return <li>
                <div className="left">
                    <span className="date">{d.date}</span>
                    <p className="input-text">{d.message}</p>
                </div>
                <p className="input-money">{d.money}</p>
            </li>
        })
        // props.data.map((item) => {
        //     return <li>
        //         <div className="left">
        //             <span className="date">{item.date}</span>
        //             <p className="input-text">{item.txt}</p>
        //         </div>
        //         <p className="input-money">{item.money}</p>
        //     </li>
        // })

    );
}

export default Item;
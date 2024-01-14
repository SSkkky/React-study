import React from 'react';

function List() {
    return (
        <div className="bank-list">
            <ul>
                {
                    <li>
                            <div className="left">
                                <span className="date"></span>
                                <p className="input-text"></p>
                            </div>
                            <p className="input-money"></p>
                        </li>
                }
            </ul>
        </div >
    );
}

export default List;
import React from 'react';

import sy1 from '../a.module.css';
import sy2 from '../b.module.css';

function Css(props) {
    return (
        <div>
            <article>
                <h2> SCSS 활용 </h2>
                <ul>
                    <li className={sy1.test}> sass 설치 (npm install sass)</li>
                    <li className={sy2.test}> 작업 파일에 (import './파일명.scss')</li>
                </ul>
            </article>
        </div >
    );
}

export default Css;
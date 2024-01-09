import React from 'react';

function Image() {
    return (
        <div>
            <article>
                <h2>이미지 활용</h2>
                <ul>
                    <li>
                        src폴더 내에 이미지 호출<br />
                        └ import log from <b>'../logo.svg';</b><br />
                        └ {`<img src={log}/>`}
                    </li>
                    <li>
                        public 폴더 안에 있는 이미지 호출<br />
                        └ {`<img src="./logo192.png"/>`}<br />
                        └ index.html 문서 기준으로 상대경로 작성
                    </li >
                </ul>
            </article>
        </div >
    )
}

export default Image;
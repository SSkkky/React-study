//Home.jsx

import React from 'react';

function Home() {
    return (
        <div>
            <article>
                <h2>프로젝트 생성 및 실행</h2>
                <ol>
                    <li>visual studio code _ open react folder </li>
                    <li>open terminal(ctrl + j)</li>
                    <li>in window 10, project error fix(npm i g create-react-app)</li>
                    <li>create project(npx create-react-app projectName)</li>
                    <li>move to created project(cd projectName)</li>
                    <li>run project(npm start)</li>
                    <li>stop project(ctrl + c)</li>
                </ol>
            </article>
            <article>
                <h2>프로젝트 폴더 구조</h2>
                <ul>
                    <li>node_modules(환경설정시 생성된 모듈 파일)</li>
                    <li>public (Static 자원이 위치하는 폴더)</li>
                    <li>src (작업 폴더 js, css, component ... )</li>
                    <li>package.json(version, dependencies, proxy, git 등의 정보 수록)</li>
                </ul>
            </article>
            <article>
                <h2>문법</h2>
                <ul>
                    <li>
                        JSX(Javascript XML) - Javascript 확장 문법<br />
                        └ 클래스 속성 → className<br />
                        └ 태그 열고 닫고 규칙(/)<br />
                        └ Javascript 구문 사용시 중괄호({`{}`})사용
                    </li>
                    <li>return은 하나의 엘리먼트로 변환(필요시 Fragments{`<></>`}사용)</li>
                    <li>파일 가져오기(import 별칭 from './파일명')</li>
                    <li>파일 내보내기(export defalut 컴포넌트명)</li>
                </ul>
            </article>
            <article>
                <h2> Style 활용 </h2>
                <ul>
                    <li>
                        태그에 style속성으로 표현 (&#123;속성&#58;값&#125;)<br />
                        └ style=&#123;속성&#58;값&#125;
                    </li>
                </ul>
            </article>
            <article>
                <h2> Module 활용 </h2>
                <ul>
                    <li>
                        스타일문서 규칙(파일명.module.css)
                    </li>
                    <li> import 별칭 <b>from './파일명.module.css'</b><br />
                        └ import sy1 from '../a.module.css';
                    </li>
                    <li> 엘리먼트 태그에 <b>className=별칭.클래스명</b><br />
                        └ {'<li className={sy1.test}> sass 설치 (npm install sass)</li>'}
                    </li>
                </ul>
            </article>
        </div>
    );
}

export default Home;
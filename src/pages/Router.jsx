import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Router() {
    const str = `function App() {
        return (
          <BrowserRouter>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/css" element={<Css />}></Route>
                <Route path="/image" element={<Image />}></Route>
                <Route path="/router" element={<Router />}></Route>
                <Route path="/props" element={<Props />}></Route>
                <Route path="/deploy" element={<Deploy />}></Route>
                <Route path="/*" element={<Not />}></Route>
              </Routes>
            </main>
          </BrowserRouter>
        );
      }`;

    const locate = useLocation();
    const navigate = useNavigate();
    console.log('locate : ', locate)


    return (
        <div>
            <article>
                <h2> Router </h2>
                <p> 새로운 페이지를 로드하지 않고 페이지 안에서 필요한 데이터만 가져오는 형태 </p>
                <ul>
                    <li>
                        모듈설치(npm i react-router-dom)
                    </li>
                    <li>
                        App.js <br />
                        └ {`import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
`}
                    </li>
                    <li>
                        메뉴 Link 컴포넌트를 이용하여 설정(브라우저 주소값 변경)<br />
                        └ Route 컴포넌트를 이용하여 컴포넌트 분리(Link값과 path값을 일치시킴)<br />
                        └ {`<Link to="/"> Home </Link>`}<br />
                        └ {`<Route path="/" element={<Home />}></Route>`}<br /><br />
                        ▼ <b>코드 정리</b><br />
                        <textarea defaultValue={str} name="" id="" cols="70" rows="10">
                        </textarea>
                    </li>
                </ul>
            </article>
            <button onClick={() => { navigate('/') }}>홈으로 이동</button>
        </div >
    )
}

export default Router;
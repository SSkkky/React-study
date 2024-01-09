import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import Not from './pages/Not';
import Css from './pages/Css';
import Image from './pages/Image';
import Router from './pages/Router';
import Props from './pages/Props';
import Deploy from './pages/Deploy';
import './test.scss';

function App() {
  return (
    <HashRouter >
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
    </HashRouter>
  );
}

export default App;

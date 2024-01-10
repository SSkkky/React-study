import Home from './pages/Home';
import Media from './pages/Media';
import json from './data.json';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Media" element={<Media />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
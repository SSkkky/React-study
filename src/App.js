import { useState } from 'react';
import './common.scss';
import List from './comp/List';
import Write from './comp/Write';

function App() {

  // 배열
  const initial = []; //초기값

  // 다음 함수로 재랜더링
  const [data, setData] = useState(initial);

  let insert = (d) => {
    setData([...data, d]);
  }

  return (
    <div className='todolist'>
      <h2> Todolist </h2>
      <p> 할일 <span>{data.length}</span>개 남음 </p>

      <List data={data} />
      <Write insert={insert} />

    </div>
  );
}

export default App;

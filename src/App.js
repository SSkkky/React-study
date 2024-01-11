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
    setData([...data, d])
    // data + d 추가
  }

  let remove = (id) => {
    // filter = 일치하는 값(true)을 반환함
    let d = data.filter((obj) => {
      return obj.id !== id
    })
    setData(d)
    // 일치하는거 제외하고 전부 가져와서 재출력
  }

  return (
    <div className='todolist'>
      <h2> Todolist </h2>
      <p> 할일 <span>{data.length}</span>개 남음 </p>

      <List data={data} remove={remove} />
      <Write insert={insert} />

    </div>
  );
}

export default App;

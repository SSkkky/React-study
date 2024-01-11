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
    // data + d 추가
  }

  let remove = (id) => {
    // filter = 일치하는 값(true)을 반환함
    let d = data.filter((obj) => {
      return obj.id !== id;
    })
    setData(d);
    // 일치하는거 제외하고 전부 가져와서 재출력
  }

  let isDone = (id) => {
    let d = data.map((obj) => {
      if (obj.id === id) { //type까지 같은 ===
        obj.state = !obj.state;
        //Item.jsx에서 해당 obj.id를 넘김
        //넘어온 id와 id가 일치하는 객체를 찾아서 state값을 !바꾸고 return obj
      }
      return obj;
    })
    setData(d);
  }

  //data.obj.state가 false(=아직안함)인 것들만 반환해서 length를 출력하기
  let dataEa = data.filter((obj) => {
    return obj.state === false
    // A === B 가 true 이면 true를 반환함
    // true가 반환되는 obj들(state=false)을 filter가 반환함!
  })

  return (
    <div className='todolist'>
      <h2> Todolist </h2>
      <p> 할일 <span>{dataEa.length}</span>개 남음 </p>

      <List data={data} remove={remove} isDone={isDone} />
      <Write insert={insert} />

    </div>
  );
}

export default App;

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const instance = axios.create({
    baseURL: 'http://localhost:3333/test',
    timeout: 1000
  })

  async function getData() {
    await instance.get('/')
      .then(res => {
        setData(res.data)
      })
  }

  console.log(data, 'data')

  const postData = async (d) => {
    await axios.post('http://localhost:3333/test', d) // root(/) = instance baseurl
    // .then(res => {
    //   console.log(res.data)
    // })
  }

  function delData(id) {
    console.log("delData id", id)
    axios.delete('http://localhost:3333/test/' + String(id))
      .then(res => {
        console.log(res.data)
      })
  }

  // put
  // .put('url/id, {객체}')
  // axios 실행시 data.json에 다음 객체가 수정됨
  function putData() {
    axios.put('http://localhost:3333/test/0', { name: '밥' })
      .then(res => {
        console.log(res.data)
      })
  }

  function submit(e) {
    e.preventDefault();

    let d = {
      id: Date.now(),
      txt: e.target[0].value
    }

    console.log(d, 'submit data')
  }

  const onChangeHandler = (e) => {
    setText('')
    setText(e.target.value)
  }

  const onClickHandler = () => {
    // 저장 axios
    if (text === "") return
    const idx = new Date;
    const params = { id: idx.getTime().toString(), name: text }
    postData(params)
    getData();
  }

  const onDeleteHandler = (id) => {
    console.log(id)
    delData(id)
    getData();
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <article>
        <h2>글쓰기</h2>
        {/* onSubmit={submit} */}
        <form >
          <input type="text" name="txt" value={text} onChange={onChangeHandler} />
          <input type="submit" value="저장" onClick={onClickHandler} />
        </form>
      </article>

      <article>
        <h2>리스트</h2>
        <ul>
          {
            data.map((obj) => {
              return <li key={obj.id}>
                {obj.name}
                <button onClick={() => { onDeleteHandler(obj.id) }}>삭제</button>
              </li>
            })
          }
        </ul>
      </article>
    </div>
  );
}

export default App;

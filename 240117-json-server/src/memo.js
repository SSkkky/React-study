/*

1. db.json 생성
{
  "test": [
    {
      "id": "0",
      "name": "곰"
    }
  ]
}
2. npm 설치
port값은 default로 3000이지만
원하는 수를 지정해서 띄워도 무방하다고 한다.
3333으로 진행해봄!

npx i json-server axios

npx json-server --watch ./src/db/data.json --port 3333
3. Endpoints 값 띄우기
1) 로컬 브라우저에서 띄우기
json-server실행이 완료되면 터미널에 Endpoints가 뜬다.
해당 주소를 웹브라우저에 띄우면 data.json을 확인할 수 있음


※ json데이터 임의 수정시 터미널에서 db를 껏다가(ctrl+c) 켜야한다!! ※








2) item 객체를 따로 확인할 수도 있다!(id값)



3) 포트까지만 작성하면 전체 확인 가능


4) console로 json 데이터 확인하기
url에 주의!!

  // axios data get이 완료되면 response를 아래처럼 수행하겠다~
  
  axios.get('http://localhost:3333/test')
    .then(res => {
      console.log(res.data)
    })


4. post test
1) axios
  // post
  // axios 실행시 data.json에 다음 객체가 추가됨
  // 즉, react-app 새로고침할 때마다 객체가 추가됨
  // ('url', {객체})
  
  axios.post('http://localhost:3333/test', { name: '연어덮밥' })
    .then(res => {
      console.log(res.data)
    })

data.json에 추가되었다!

2) id값으로 local 확인


5. delete test
delete('url/id값')
1) 예제 코드
  axios.delete('http://localhost:3333/test/100')
    .then(res => {
      console.log(res.data)
    })
저장 후 json파일 확인하면 id:100인 객체가 사라져있음을 확인할 수 있음
id는 고유값이므로 2개이상 중복되는 객체가 있으면 에러난다!

6. put test
axios 실행시 data.json에 다음 객체가 수정됨

put('url/id값',{객체})
1) 예제 코드
  axios.put('http://localhost:3333/test/101', {name:'농담곰'})
    .then(res => {
      console.log(res.data)
    })
😃 instance
1. axios.create
1) axios.create로 instance라는 초기값을 만든다!
  const instance = axios.create({
    baseURL: 'http://localhost:3333/test',
    timeout: 1000
  })
2) 기존 코드 수정
  function getData() {
    instance.get('/')
      .then(res => {
        console.log(res.data)
      })
  }

  getData();
  
2. async-await
await가 끝나기 전까지 밑 구문을 실행하지 않음

데이터를 받아오기 전에 실행되지 않도록 할 수 있을듯(data.cast가 없습니다~)

  async function getData() {
    await instance.get('/')
      .then(res => {
        console.log(res.data)
      })
    console.log('비동기')
  }

  getData();
axios 데이터가 .then ~으로 처리되어야하는데
그 부분을 변수로 담아서 처리할 수 있다!

  async function getData() {
    let data = await instance.get('/');
    console.log('data : ', data)
  }

  getData();
🤔 Promise
/////매개변수 순서가 중요함!! (성공, 실패)

new Promise((resolve, reject)=>{
      resolve('성공')
      reject('실패')
    });
성공, 실패 결과를 매개변수에 넣어 프로미스 시작점에 넘김
=> 변수에 담아서 변수값을 확인한다!




🤷‍pending??
= resolve 실행 전에 console이 실행되서!!
=> new Promise앞에 await를 적용하면 정상출력

axios가 아닌 비동기를 쓸 때?



async function getData() {
    let data = new Promise((resolve, reject) => {
      // instance.get('/')
      setTimeout(() => {
        resolve('성공')
      }, 1000)
    })
      .then(res => {
        console.log(res, 'res')
      });
  }

  getData();
동시에 가져와야할 데이터가 많은 경우? Promise.all()
    Promise.all(instance.get('/'))
      .then((result) => {
        console.log(result, 'result')
      })


id:100 값만 가져오고 싶을 때?
url 주소 값 수정
Promise.all([instance.get('/100')])

*/
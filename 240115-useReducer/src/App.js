import Item from "./comp/Item";
import { MyContext } from "./comp/MyContext";
//export fn시 객체로 내보냄. {fnname}으로 받아와야함

function App() {
  return (
    <MyContext>
      <div className="App">
        <Item>
          <h2>전역으로 관리할 데이터</h2>
        </Item>
      </div>
    </MyContext>
  );
}

export default App;

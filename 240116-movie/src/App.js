import { useEffect } from "react";
import { useStore } from "./hooks/Store";

function App() {
  const {getList, list} = useStore();

  useEffect(()=>{
    getList()
  },[])

  return (
    <></>
  );
}

export default App;

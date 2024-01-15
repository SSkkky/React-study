import React, { useEffect } from 'react';
import { useStore } from './Store'
import Slide from './comp/Slide';


function App() {

  const { popular, getMovie, thumb, poster } = useStore();

  useEffect(() => {
    getMovie('popular')
  }, [])

  if (!popular.length) return <>준비중....</>;

  return (
    <Slide />
  );
}

export default App;
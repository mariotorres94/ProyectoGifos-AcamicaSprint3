import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Search } from './Components/Search/Search';

function App() {
  const [modeDark, setModeDark] = useState(false);

  const cambiarEstado = () => {
    setModeDark(!modeDark);
  }
  return (
    <div className={`App ${!modeDark ? "light" : "dark"}`}>
      <Header cambiarEstado={cambiarEstado} modeDark={modeDark} />
      <Search modeDark={modeDark}/>
    </div>
  );
}

export default App;

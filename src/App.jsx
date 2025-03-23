import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Content1 from './Content1';
import Cname from './Cname';
import LastBox from './LastBox';


function App() {

  return (
    <>
    <div className="align">
    <Navbar /> 
    <Content1 />
    <Cname />
    <LastBox />
    </div>
     
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import React from "react";
import Broadcast from './components/Broadcast/broadcast';
import Template from './components/Template/template';
import NavbarVariant from './components/navbar/navbar';

function App() {
  return (
   <div className="Screen-wrapper">
    <NavbarVariant templateName="New Broadcast"/>
   <div className='Box-wrapper'>
      <Broadcast/>
      <Template/>
      </div>
   </div>
  );
}

export default App;

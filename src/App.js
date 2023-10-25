import React, { useState } from 'react';
import './App.css';
import logo from './components/images/logo.svg';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <img src={logo} alt='splitter'/>
      <div class="wrapper">
        <div className='container'>
          <div className='form'>
          </div>
          <Form />
          <Display />
        </div>
      </div>
      
    </div>
  );
}

export default App;

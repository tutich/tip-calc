import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='container'>
        <div className='form'>

        </div>
        <Display />
        <Form />
      </div>
      
    </div>
  );
}

export default App;

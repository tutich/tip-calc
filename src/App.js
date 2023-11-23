import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import logo from './components/images/logo.svg';
import Form from './components/Form';
import Display from './components/Display.jsx';

function App() {
  // const [count, setCount] = useState(0)
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(bill > 0 && people > 0 && tip > 0){
      setCalculatedTip(bill * (tip / 100));
      setTotal(calculatedTip + bill)
    }
  }, [bill, people, tip, calculatedTip])

  const handleResetBtn = (e) => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  }
  return (
  
      <div className="wrapperr">
        <img src={logo} alt='splitter' className='log'/>
        <div className="container">
          <Form
              bill={bill}
              setBill={setBill}
              setTip={setTip}
              people={people}
              setPeople={setPeople}
            />
            <Display
              total={total}
              people={people}
              calculatedTip={calculatedTip}
              handleResetBtn={handleResetBtn}
            />
        </div>
        
      </div>
  );
}

export default App;

import dollar from '../components/images/icon-dollar.svg';
import person from '../components/images/icon-person.svg';

const Form = ({ bill, setBill, setTip, people, setPeople }) => {

  const tipBtns = [5, 10, 15, 25, 50];

  const handleSelectedTip = (e) => {
    setTip(+e.target.value);
  }
  const numberInput = {
    border: people === '0' ? '1px solid red' : '1px solid initial',
  };
    return(
        // <div className="form">
        //   <div className="label-grp">
        //     <div class="label-wrapper">
        //       <label htmlFor="Bill" >Bill</label>
        //       <p className='error'>Error</p>
        //       </div>
        //     <div class="number-wrapper">
        //       <input type="number" id="bill"/>
        //       <img src={dollar} alt=""  className="icon"/>
        //     </div>
        //   </div>
            
        //         <div class="tipsect">
        //          <p className='label'>Select Tip %</p>
        //          <div className="tipamt-wrapper">
        //           <div className='tipamt'>
        //             <input type='radio' name='tip' value={.05}/>
        //             <div className='tip-btn'>5%</div>
        //           </div>
        //        </div>
                  
                            
        //         <div class="tipsect">
        //           <div className='tipamt'>
        //             <input type='radio' name='tip' value={.1}/>
        //             <div className='tip-btn'>10%</div>
        //           </div>
        //         </div>
                          
                
                            
        //         <div class="tipsect">
        //           <div className='tipamt'>
        //             <input type='radio' name='tip' value={.15}/>
        //             <div className='tip-btn'>15%</div>
        //           </div>
        //         </div>
                           
                
                            
        //         <div class="tipsect">
        //           <div className='tipamt'>
        //             <input type='radio' name='tip' value={.25}/>
        //             <div className='tip-btn'>25%</div>
        //           </div>
        //         </div>
                           
                
                           
        //         <div class="tipsect">
        //           <div className='tipamt'>
        //             <input type='radio' name='tip' value={.5}/>
        //             <div className='tip-btn'>50%</div>
        //         </div>
        //         <div class="tipsect">
                
        //           <input type='number' className='tip-custom'/>
        //         </div>
        //       </div>
        //     </div>

        //   <div className="label-grp">
        //     <div class="label-wrapper">
        //       <label htmlFor="Bill" className='label'> number of People</label>
        //       <p className='error'>Error</p>
        //     </div>
        //     <div class="number-wrapper">
        //       <input type="number" id="people"/>
        //       <img src={person} alt='' className='icon'/>
        //     </div>
        //   </div>

        // </div>
        <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">Bill</label>
          {/* <p className="error">{
            showBillAmtError ? "Please enter numbers only" : ""
          }</p> */}
        </div>
        <div className="number-wrapper">
          <input type="text" className="number-input" id="bill" onInput={(e) => setBill(+e.target.value)} value={bill}/>
          <img src={dollar} aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label">Selected Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input1" name="tip" value=".05"/>
            <div className="tip-btn">5%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input2" name="tip" value=".1"/>
            <div className="tip-btn">10%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input3" name="tip" value=".15"/>
            <div className="tip-btn">15%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input4" name="tip" value=".25"/>
            <div className="tip-btn">25%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" onInput={handleSelectedTip} id="input5" name="tip" value=".5"/>
            <div className="tip-btn">50%</div>
          </div>
          <input type="text" onInput={handleSelectedTip} id="custom" className="number-input tip-custom" placeholder='Custom'/>
          <label htmlFor="custom" className="tip-custom-label"></label>

        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">Number of People</label>
          {/* <p className="error">{
            showPeepsError ? "Please enter numbers only" : ""
          }</p> */}
          <p className="error">{
            people === 0 ? "Can’t be zero" : ""
          }</p>
        </div>
        <div className="number-wrapper">
          <input type="text"  className={`number-input ${people === 0 ? 'number-error' : ""}`}  id="people" onInput={(e) => setPeople(+e.target.value)} value={people}/>
          <img src={person} aria-hidden="true" className="icon" />
        </div>
      </div>

    </div>
    )
}

export default Form;
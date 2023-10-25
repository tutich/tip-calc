import dollar from '../components/images/icon-dollar.svg';
import person from '../components/images/icon-person.svg';

const Form = () => {
    return(
        <div className="form">
          <div className="label-grp">
            <label htmlFor="Bill" >Bill</label>
            <input type="number" id="bill"/>
            <img src={dollar} alt=""  className="icon"/>
          </div>
            <div className='tipsect'>
              <p className='label'>Select Tip %</p> 
              <div className="tipamt-wrapper">
                <div className='tipamt'>
                  <input type='radio' name='tip' value={.05}/>
                  <div className='tip-btn'>5%</div>
                </div>
                            </div>
                            <div className='tipsect'>
                <div className='tipamt'>
                  <input type='radio' name='tip' value={.1}/>
                  <div className='tip-btn'>10%</div>
                </div>
                            </div>
                
                            <div className='tipsect'>
                <div className='tipamt'>
                  <input type='radio' name='tip' value={.15}/>
                  <div className='tip-btn'>15%</div>
                </div>
                            </div>
                
                            <div className='tipsect'>
                <div className='tipamt'>
                  <input type='radio' name='tip' value={.25}/>
                  <div className='tip-btn'>25%</div>
                </div>
                            </div>
                
                            <div className='tipsect'>
                <div className='tipamt'>
                  <input type='radio' name='tip' value={.5}/>
                  <div className='tip-btn'>50%</div>
                </div>
                <input type='number' className='tip-custom'/>
              </div>
            </div>

          <div className="label-grp">
            <label htmlFor="Bill" >People</label>
            <p>Error</p>
            <input type="number" id="people"/>
            <img src={person} alt='' className='icon'/>
          </div>

        </div>
    )
}

export default Form;
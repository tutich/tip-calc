

const Form = () => {
    return(
        <div className="form">
          <div className="label-grp">
            <label htmlFor="Bill" >Bill</label>
            <input type="number" id="bill"/>
            <img />
          </div>

          <div className="label-grp">
            <label htmlFor="Bill" >People</label>
            <input type="number" id="people"/>
          </div>

        </div>
    )
}

export default Form;
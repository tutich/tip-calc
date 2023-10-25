const Display = () => {
    return(
        <div className="display">
         <div className="display-row">
            <div className="wrapper">
                <div class="display-grp">
                    <div className="display-label">
                        <p className="header">Tip Amount</p>
                        <p className="unit">/ person</p>
                    </div>
                    <div className="display-amt">
                        <p className="value">$0.00</p>
                    </div>
                </div>
                <div class="display-grp">
                    <div className="display-label">
                        <p className="header">Total</p>
                        <p className="unit">/ person</p>
                    </div>
                    <div className="display-amt">
                        <p className="value">$0.00</p>
                    </div>
                </div>
            </div>
            <button className="btn" disabled>Reset</button>
         </div>
        </div>
    )
    }
    export default Display;
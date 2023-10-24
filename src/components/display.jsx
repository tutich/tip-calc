const Display = () => {
return(
    <div>
     <div className="display-row">
        <div className="wrapper">
            <div className="display-label">
                <p className="header">Tip Amount</p>
                <p className="unit">person</p>
            </div>
            <div className="display-amt">
                <p className="value">$0.00</p>
            </div>
            <div className="display-label">
                <p className="header">Tip Amount</p>
                <p className="unit">person</p>
            </div>
            <div className="display-amt">
                <p className="value">$0.00</p>
            </div>
        </div>
        <btn className="btn">Reset</btn>
     </div>
    </div>
)
}
export default Display
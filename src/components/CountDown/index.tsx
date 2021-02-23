function CountDown() {
    return (
        <div>
            <div className="count-down-container">

                <div>
                    <span>2</span>
                    <span>5</span>
                </div>
                
                <span>:</span>
                
                <div>
                    <span>0</span>
                    <span>0</span>
                </div>

            </div>

            <button type="button" className="count-down-button">
                Iniciar um ciclo
            </button>

        </div>
    )
}

export default CountDown;
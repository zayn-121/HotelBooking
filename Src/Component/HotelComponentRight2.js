const HotelComponentRight2 = ({price})=>{

    return(
        <div className="right-div-2">
            <h2>Reservation Summary</h2>
            <form>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
                <div className="check-in-out">
                    <p className="check-in"> Check in</p>
                    <p className="check-out"> Check out </p>
                </div>
                <div className="time-div">
                    <span>From 15.00h</span>
                    <span>Before 12.00h</span>
                </div>
                <div className="reservation-date">
                    <p className="reservation">Reservation date</p>
                    <p>From <strong>08/08/2023</strong> to <strong>09/08/2023</strong></p>
                </div>
                <div className="people-div">
                    <p><strong>People</strong></p>
                    <p>2 Adults</p>
                    <p>0 Children</p>
                </div>
                <hr></hr>
                <div className="total-div">
                    <h1>Total</h1>
                    <h1>{price}₹</h1>
                </div>
                <button className="submit-btn">Continue</button>
            </form>
        </div>
    )
}
export default HotelComponentRight2;
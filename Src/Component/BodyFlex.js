import ProgressBar1 from "../Assets/book-steps-1.png";
import HotelComponentLeft from "./HotelComponentLeft";
import HotelcomponentRight1 from "./HotelComponentRight1";
import { hotelCard } from "../config/hotelCard";
import HotelComponentRight2 from "./HotelComponentRight2";
import { useState } from "react";


const BodyFlex = () => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const handleCardClick = (price) => {
    console.log("Clicked price:", price)
    setSelectedPrice(price);
  }
  

  return (
    <div className="body-flex">
      <div className="body-left">
        <div>
          <h2 className="room-rate">Rooms & Rates</h2>
          <img src={ProgressBar1} alt="prgressImg" className="prgrsImg-1"></img>
        </div>
        {hotelCard.map((hotel, index) => (
          <HotelComponentLeft
            key={index}
            {...hotel}
            onClick={() => handleCardClick(hotel.price)}
            
          />
        ))}
      </div>
      <div className="body-right">
        <HotelcomponentRight1 />
        <HotelComponentRight2 price={selectedPrice} />
      </div>
    </div>
  );
};

export default BodyFlex;

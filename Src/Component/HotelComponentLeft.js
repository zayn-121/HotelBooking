// import HotelcomponentRight from "./HotelComponentRight";



const HotelComponentLeft = ({name,image,description,size,icon,bed,people,price}) => {
  return (
      <div className="div-60">
        <div className="hotel-card">
          <div className="room-1">
            <img
              src={image}
              alt="room-1"
              className="first-room"
            ></img>
          </div>
          <div className="description">
            <h2>{name}</h2>
            <p>{description}</p>
            <p className="room-size">{size}</p>
            <img src={icon} className="icon-1"></img>
            <div className="bed-people-price">
              <p>Beds: {bed}</p>
              <p>People: {people}</p>
              <h2>₹ {price}</h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HotelComponentLeft;


const hotel = (props)=>{
return num + num1
}
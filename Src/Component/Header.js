import Title from "./Title";
import HeaderImgs from "../Assets/los-cocos-room-header-2-x.png"


const Header = () => {
    return (
      <div className="header">
        <Title />
        <ul>
          <li>Home</li>
          <li>Rooms</li>
          <li>Restraunt</li>
          <li>Wedding</li>
          <li>Membership</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  };
  
 export const HeaderImg = () => {
    return (
      <div className="headerImg">
        <img
          src={HeaderImgs}
          alt="header-img">
        </img>
        <div className="transparent-bar"></div>
        <div className="options">
          <input type="date" value=""></input>
          <input type="date" value=""></input>
          <select>
            <option value="">Adults:1</option>
            <option value="Adults:2">Adults:2</option>
            <option value="Adults:3">Adults:3</option>
            <option value="Adults:4">Adults:4</option>
            <option value="Adults:5">Adults:5</option>
            <option value="Adults:6">Adults:6</option>
          </select>
          <select>
            <option value="">Children</option>
            <option value="Children:1">Children:1</option>
            <option value="Children:2">Children:2</option>
            <option value="Children:3">Children:3</option>
            <option value="Children:4">Children:4</option>
            <option value="Children:5">Children:5</option>
          </select>
        </div>
        <button className="btn-modify">Modify</button>
  
      </div>
    );
  };

  export default Header;
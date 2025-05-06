import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navTabs">
        <div>
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="link" to="/instamart">
            Instamart
          </Link>
          <Link className="link" to="/foodDelivery">
            FoodDelivery
          </Link>
          <Link className="link" to="/restaurant">
            Restaurant
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Header;

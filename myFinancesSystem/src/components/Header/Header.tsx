import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <FontAwesomeIcon icon={faSackDollar} color="#7af1a7" size="2x" />
        <h2>My Finances</h2>
      </div>
    </header>
  );
};

export default Header;

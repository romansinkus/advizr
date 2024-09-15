import { Link } from "react-router-dom";
import logo from "./assets/advizr-logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="advisor logo" className="logo" />
        </Link>
        <h1 className="advizr-name">Advizr</h1>
      </div>
    </>
  );
};

export default Navbar;

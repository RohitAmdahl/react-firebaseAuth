import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center item-center">
        <Link to="/" className="m-2">
          <img src={logo} alt="logo" className="max-w-logo" />
        </Link>
      </div>
      <nav className=""></nav>
    </>
  );
};

export default Navbar;

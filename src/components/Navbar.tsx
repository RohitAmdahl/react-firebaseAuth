import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { navItems } from "../helpers/navigation";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-100 pt-2">
        <Link to="/" className="">
          <img src={logo} alt="logo" className="max-w-logo" />
        </Link>
      </div>
      <nav>
        {navItems.map((items) => {
          return (
            <div key={items.id}>
              <NavLink to={items.link}> {items.name} </NavLink>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;

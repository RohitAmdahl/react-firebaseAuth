import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { navItems } from "../helpers/navigation";

const Navbar = () => {
  return (
    <>
      <div className=" pt-2">
        <Link to="/" className="">
          <img src={logo} alt="logo" className="max-w-logo" />
        </Link>
      </div>
      <div>
        <nav className="flex justify-between items-baseline gap-7 text-lg font-sans font-semibold">
          {navItems.map((items) => {
            return (
              <div className="flex " key={items.id}>
                <NavLink className="px-2" to={items.link}>
                  {" "}
                  {items.name}{" "}
                </NavLink>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import logoSmall from "../assets/logo.png";
import { FooterBar, FooterItems } from "../helpers/footer";
const Footer = () => {
  return (
    <>
      <footer className="p-2">
        <div className="container text-text mx-auto max-w-4xl flex flex-col items-center m-2 p-2 border-t-2 lg:grid lg:grid-cols-3 lg:gap-7">
          <div>
            <Link to="/">
              <img
                className=" max-w-logo p-2"
                src={logoSmall}
                alt="ifc vision logo"
              />
            </Link>
          </div>
          <div className="p-2">
            {FooterItems.map((itemsFooter: FooterBar) => {
              return (
                <div className="flex" key={itemsFooter.id}>
                  <NavLink to={itemsFooter.link}>{itemsFooter.name}</NavLink>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col p-2">
            <span>Project by Rohit kumar Amdahl</span>
            <span>&copy; IFC VISION CONCEPT</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

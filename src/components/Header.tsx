import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="py-4 m-2 ">
      <header className="container mx-auto flex justify-between items-baseline max-w-4xl px-2 ">
        <Navbar />
      </header>
    </div>
  );
};

export default Header;

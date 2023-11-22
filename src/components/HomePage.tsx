import { Link } from "react-router-dom";
import mainPic from "../assets/mainIMg.png";
const HomePage = () => {
  return (
    <>
      <section className="mt-2 p-12 grid grid-cols-1 gap-5 lg:grid-cols-2 md:flex-wrap md:m-6">
        <div>
          <h1 className="text-3xl font-serif md:py-6  ">
            <span className="text-3xl font-serif font-bold text-blue-950">
              Architectural Insight with Vision:
            </span>
            A New Era in IFC Viewing
          </h1>
          <div className="my-8 md:py-6 md:flex md:justify-center md:items-center md:max-w-sm text-center">
            <Link
              className="px-7 py-3 w-full bg-slate-800 rounded-md text-white "
              to="/demo"
            >
              Upload IFC
            </Link>
          </div>
        </div>
        <div>
          <img src={mainPic} alt="picture" className=" max-w-pic w-full" />
        </div>
      </section>
      <div>
        <p className="p-4 m-4 max-w-md text-center font-serif font-semibold">
          Enable users to effortlessly view and interact with 3D models directly
          in their web browsers.
        </p>
      </div>
    </>
  );
};

export default HomePage;

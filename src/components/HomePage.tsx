import { Link } from "react-router-dom";
import mainPic from "../assets/mainIMg.png";
import { BsCloudUpload } from "react-icons/bs";
const HomePage = () => {
  return (
    <>
      <section className=" container max-w-4xl mx-auto items-center">
        <div className=" flex flex-col justify-center items-center lg:grid md:m-6 md:max-w-4xl lg:max-w-4xl lg:grid-cols-2 lg:gap-5 lg:items-center">
          <div className=" text-text flex justify-center items-center md:max-w-lg md:container md:mx-auto">
            <h1 className="text-3xl font-sans md:py-6 m-4 font-bold">
              <span className="text-3xl font-serif font-bold text-heading">
                Architectural Insight with Vision:
              </span>
              A New Era in IFC Viewing
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={mainPic}
              alt="picture"
              className="max-w-pic w-full p-8 md:p-2 lg:p-4"
            />
          </div>
          <div className="text-text flex justify-center items-center">
            <p className="m-4 max-w-md font-serif">
              Enable users to effortlessly view and interact with 3D models
              directly in their web browsers.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center m-4">
          <Link
            className="px-7 py-2 flex justify-center items-center gap-4 bg-buttonBg font-bold rounded-md shadow-xl text-text hover:bg-hover  hover:transition-all hover:ease-in-out duration-200  hover:border-heading"
            to="/demo"
          >
            <BsCloudUpload size={25} /> Upload IFC
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;

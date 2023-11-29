import { Link } from "react-router-dom";

import { BsCloudUpload } from "react-icons/bs";
const HomePage = () => {
  return (
    <>
      <section className=" container max-w-4xl mx-auto items-center">
        <div className=" flex flex-col justify-center items-center lg:grid md:m-6 md:max-w-4xl lg:max-w-4xl lg:grid-cols-1 lg:gap-5 lg:items-center">
          <div className=" text-text flex justify-center items-center md:max-w-lg md:container md:mx-auto">
            <h1 className="text-4xl font-sans md:py-6 m-4 font-bold">
              <span className="text-3xl font-serif font-bold text-heading">
                A simple React project demonstrating Firebase Authentication
                using TypeScript and Vite.
              </span>
              Google Firebase
            </h1>
          </div>

          <div className="text-text">
            <p className="m-4">
              These instructions will help you set up and run the project on
              your local machine. Check READ ME File.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

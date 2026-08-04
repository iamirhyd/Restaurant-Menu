import React from "react";
import Navbar from "../Components/Navbar";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#2C1810] overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute z-20">
          <Navbar />
        </div>
        <div className="flex flex-col md:flex-row min-h-screen  items-center ">
          <div className="text-center w-full md:w-1/2 text-white px-4 md:px-12 space-y-4 pt-20">
            <h1 className="font-extrabold text-4xl md:text-7xl text-left py-5 gap-4">
              THE MOST <br />
              <span className="text-amber-600"> UNHEALTHIEST</span> FOOD IN
              <br />
              THE WORLD
            </h1>
            <p className="text-left text-gray-300 font-thin text-2xl gap-4 ">
              Unhealthy? Absolutely. Delicious? Definitely.
            </p>
            <div className="mt-4 flex items-start ">
              <button
                className=" 
              flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-md
              transition-colors cursor-pointer shadow-md "
              >
                <MdOutlineRestaurantMenu /> Check out the Menu!
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center  w-full sm:p-5 md:w-1/2">
            <img
              src="/Burger.png"
              alt="Background"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

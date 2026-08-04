import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed grid grid-cols-3 items-center px-6 w-full h-auto bg-transparent">
        <div className="justify-self-start">
          <img
            src={`${import.meta.env.BASE_URL}newlogo.png`}
            alt="FastFood Logo"
            className="h-18 w-auto"
          />
        </div>

        <div className="justify-self-center">
          <ul className="hidden md:flex gap-6 text-white text-base font-medium cursor-pointer">
            <li className="hover:text-amber-600">Home</li>
            <li className="hover:text-amber-600">Menu</li>
            <li className="hover:text-amber-600">Locations</li>
            <li className="hover:text-amber-600">About us</li>
            <li className="hover:text-amber-600">Contact</li>
          </ul>
        </div>

        <div className="justify-self-end space-x-5 font-medium">
          <button className="bg-amber-600 hover:bg-amber-700 py-2 px-4 rounded-md text-black cursor-pointer">
            Login
          </button>
          <button className="text-white hover:text-gray-200 cursor-pointer py-2 px-4 rounded-md">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

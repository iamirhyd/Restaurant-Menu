import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed flex items-center justify-between px-6  w-full h-auto bg-[#1F150C]">
        <div className="shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="FastFood Logo"
            className="h-16 w-auto"
          />
        </div>
        <ul className="hidden md:flex gap-6 text-white  text-base font-medium cursor-pointer">
          <li className="hover:text-amber-900">Home</li>
          <li className="hover:text-amber-900">Menu</li>
          <li className="hover:text-amber-900">Locations</li>
          <li className="hover:text-amber-900">About us</li>
          <li className="hover:text-amber-900">Contact</li>
        </ul>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

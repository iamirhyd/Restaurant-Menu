import React from "react";

const Menu = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <div>
        <ul className="gap-6 flex flex-row justify-evenly py-5 font-medium ">
          <li className="hover:text-amber-600 group relative cursor-pointer">
            Breakfast
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-amber-600 group relative cursor-pointer">
            Launch
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-amber-600 group relative cursor-pointer">
            Dinner
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-amber-600 group relative cursor-pointer">
            Salads
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-amber-600 group relative cursor-pointer">
            dessert
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="hover:text-amber-600 group relative cursor-pointer">
            Sides
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

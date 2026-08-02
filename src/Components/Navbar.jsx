import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly items-center w-full h-auto">
        <div className="">
          <img src="./Logo.png" alt="" className="w-15" />
        </div>
        <div className="flex-col">
          <li>
            <ul>Home</ul>
            <ul>Menu</ul>
            <ul>Contacts</ul>
            <ul></ul>
            <ul></ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;

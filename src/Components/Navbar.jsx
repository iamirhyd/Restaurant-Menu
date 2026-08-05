import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" sticky grid grid-cols-3 items-center px-6 w-full h-auto bg-transparent">
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
            <li className="hover:text-amber-600">Contact</li>
          </ul>
        </div>
        <div className="justify-self-end space-x-5 font-medium hidden md:flex">
          <button className="bg-amber-600 hover:bg-amber-700 py-2 px-4 rounded-md text-black cursor-pointer">
            Login
          </button>
          <button className="text-white hover:text-gray-200 cursor-pointer py-2 px-4 rounded-md">
            Register
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1 items-center justify-self-end "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${open ? "rotate-45 translate-y-[6px]" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition ${open ? "-rotate-45 translate-y-[-6px]" : ""}`}
          ></span>
        </button>

        {open && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl bg-amber-600/40 backdrop-blur-lg border border-white/15 p-6 md:hidden">
            <ul className="flex flex-col gap-4 text-white text-center">
              <li className="hover:text-amber-600">Home</li>
              <li className="hover:text-amber-600">Menu</li>
              <li className="hover:text-amber-600">Locations</li>
              <li className="hover:text-amber-600">Contact</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

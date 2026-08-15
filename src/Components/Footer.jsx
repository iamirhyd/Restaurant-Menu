import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1A0F0A] text-gray-300 py-6 mt-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4">
        <img
          src={`${import.meta.env.BASE_URL}newlogo.png`}
          alt="logo"
          className="h-14 w-auto object-contain object-left"
        />
        <div className="flex gap-6  mt-2">
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-amber-500 transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-amber-600/30 my-4"></div>
      <div className="text-center text-sm text-gray-500">
        © 2026 The Menu. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

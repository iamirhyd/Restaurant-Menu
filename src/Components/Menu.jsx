import React, { useState } from "react";

const Menu = () => {
  const [selectItem, setSelectItem] = useState(null);
  const Menu = ["BreakFast", "Launch", "Dinner", "Sides", "Dessert"];
  return (
    <div className="bg-white min-h-screen w-full overflow-x-auto whitespace-nowrap">
      <div>
        <ul className="gap-6 flex flex-row justify-evenly py-5 font-medium ">
          {Menu.map((MenuList, i) => (
            <li
              key={MenuList}
              onClick={() => {
                setSelectItem(i);
              }}
              className={`hover:text-amber-600 group relative cursor-pointer ${selectItem === i ? "text-amber-600" : null}`}
            >
              {MenuList}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full ${selectItem === i ? "w-full" : null}`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;

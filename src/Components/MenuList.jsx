import React, { useState } from "react";

const MenuList = () => {
  const [selectItem, setSelectItem] = useState(null);
  const Menu = ["BreakFast", "Launch", "Dinner", "Sides", "Dessert"];
  const foodList = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      category: "Lunch",
      description:
        "Pasta with creamy egg sauce, crispy pancetta, and fresh Parmesan cheese",
      image: "./MenuPreview.png",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Lunch",
      description:
        "Classic tomato sauce, fresh mozzarella, and basil leaves on a crispy thin crust",
      image: "./MenuPreview.png",
    },
    {
      id: 3,
      name: "Grilled Ribeye Steak",
      category: "Dinner",
      description:
        "Juicy premium beef served with garlic butter, rosemary, and roasted vegetables",
      image: "./MenuPreview.png",
    },
    {
      id: 4,
      name: "Caesar Salad",
      category: "Sides",
      description:
        "Crisp romaine lettuce with parmesan, croutons, and creamy Caesar dressing",
      image: "./MenuPreview.png",
    },
    {
      id: 5,
      name: "Classic Burger",
      category: "Lunch",
      description:
        "Juicy beef patty with lettuce, tomato, cheese, and special sauce in a brioche bun",
      image: "./MenuPreview.png",
    },
    {
      id: 6,
      name: "French Toast",
      category: "BreakFast",
      description:
        "Golden brown toast with cinnamon, served with maple syrup and fresh berries",
      image: "./MenuPreview.png",
    },
    {
      id: 7,
      name: "Chocolate Lava Cake",
      category: "Dessert",
      description:
        "Warm chocolate cake with a gooey molten center, served with vanilla ice cream",
      image: "./MenuPreview.png",
    },
    {
      id: 8,
      name: "Greek Yogurt Bowl",
      category: "BreakFast",
      description:
        "Creamy yogurt with honey, granola, and fresh seasonal fruits",
      image: "./MenuPreview.png",
    },
    {
      id: 9,
      name: "Mushroom Risotto",
      category: "Dinner",
      description:
        "Creamy Arborio rice with wild mushrooms, truffle oil, and Parmesan cheese",
      image: "./MenuPreview.png",
    },
    {
      id: 10,
      name: "Onion Rings",
      category: "Sides",
      description: "Crispy golden onion rings served with spicy dipping sauce",
      image: "./MenuPreview.png",
    },
  ];
  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap">
        <ul className="gap-6 flex flex-row justify-evenly py-5 font-medium ">
          {Menu.map((items, i) => (
            <li
              key={items}
              onClick={() => {
                setSelectItem(i);
              }}
              className={`hover:text-amber-600 group relative cursor-pointer ${selectItem === i ? "text-amber-600" : null}`}
            >
              {items}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-md bg-amber-600 transition-all duration-300 group-hover:w-full ${selectItem === i ? "w-full" : null}`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 ">
        {/* Grid */}
        {foodList.map((foodItems) => (
          <div
            className="bg-gray-100 rounded-md shadow-md flex-col flex h-auto "
            key={foodItems.id}
          >
            <img
              src={foodItems.image}
              alt={foodItems.name}
              className="h-48 w-full object-cover "
            />
            <div className="p-4 flex-col flex gap-1">
              <h3 className="font-bold text-lg text-gray-800">
                {foodItems.name}
              </h3>
              <p className="text-sm text-gray-600 flex-1 h-24 overflow-hidden w-full h-auto line-clamp-2">
                {foodItems.description}
              </p>
            </div>
            <div className="p-2">
              <button className="bg-gray-200 hover:bg-gray-400 rounded-lg w-full h-10 cursor-pointer mt-auto ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuList;

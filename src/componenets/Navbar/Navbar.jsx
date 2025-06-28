import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-4 fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-lg ">
      <div className="container flex justify-between items-center ">
        {/* logo section */}
        <div>
          <p className="text-2xl font font-semibold">
            FOOD <span className="text-red-500">Eat</span>
          </p>
        </div>
        {/* menu section */}
        <div className="flex justify-end items-center gap-6">
          <ul className="gap-12 hidden sm:flex">
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              Home
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              Menu
            </li>
            <li className="hover:border-b-2 border-primary uppercase cursor-pointer">
              About
            </li>
          </ul>
        </div>
        {/* login section */}
        <div className="flex gap-4 items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
            className="w-10 rounded-full"
            alt="Image Of Profile"
          />
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

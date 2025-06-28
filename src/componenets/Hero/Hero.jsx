import React from "react";

const Hero = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-h-[60px] ">
      {/* Text section */}
      <div className="flex  flex-col justify-center gap-5 text-center md:text-left  md:p-0 pt-24 pb-10 mt-5">
        <h1 className="text-4xl lg:text-6xl font-semibold mt-20">
          Delicious Food Is Waiting For You
        </h1>
        <p className="font-medium text-lg sm:font-medium">
          Savor the mouthwatering delights of our restaurant, where every bite
          is a feast for the senses. From crispy, golden-brown perfection to
          flavors that will knock your socks off, we serve nothing but the best.
          So, why wait? Dig in and let your taste buds dance!
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-[#ff8401db] text-white px-4 py-2 rounded-3xl hover:scale-105 duration-200">
            Food Menu
          </button>
          <button className="bg-[#aeacac] text-black px-4 py-2 rounded-3xl hover:scale-105 duration-200">
            Book Table
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="flex flex-row justify-center items-center mt-28">
        <img
          src="https://pngimg.com/d/pizza_PNG44092.png"
          alt="Plate image"
          className="w-[300px]  rounded-full mt-5 bg-white/50 backdrop-blur-3xl  animate-[spin_10s_linear_infinite] img-shadow max-w-[500px] mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default Hero;

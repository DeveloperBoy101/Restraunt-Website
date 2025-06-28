import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto py-14 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/id/618630648/photo/homemade-cheese-smash-burger.jpg?s=612x612&w=0&k=20&c=OGgJ0M1_omgjTOrpz_uRt2S48BiHVUrGNg57Qc4ljuA="
            alt="Delicious Burger"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl shadow-lg rounded-2xl transition-all duration-500 ease-in-out 
             hover:scale-110 hover:rotate-3 hover:-translate-y-3 hover:shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Food is always good
          </h1>
          <p className="py-4 text-black text-lg">
            Enjoy delicious food made with love! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eaque consequatur eveniet iste
            assumenda est eligendi hic dolores provident.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

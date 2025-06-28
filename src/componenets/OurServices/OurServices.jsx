import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineFastfood } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { CiDeliveryTruck } from "react-icons/ci";

const OurServices = () => {
  return (
    <div className="container py-12 mt-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Our Services</h1>
      </div>

      {/* Icon Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-center text-center gap-3">
          <FaMobileScreen className="text-4xl text-red-500" />
          <p className="text-lg font-medium">Online Booking</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <MdOutlineFastfood className="text-4xl text-yellow-500" />
          <p className="text-lg font-medium">Fast Food</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <ImSpoonKnife className="text-4xl text-green-500" />
          <p className="text-lg font-medium">Healthy Food</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <CiDeliveryTruck className="text-4xl text-blue-500" />
          <p className="text-lg font-medium">Free Home Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

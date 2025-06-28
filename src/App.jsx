import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import Hero from "./componenets/Hero//Hero";
import Toplist from "./componenets/Toplist/Toplist";
import Banner from "./componenets/Banner/Banner";
import OurServices from "./componenets/OurServices/OurServices";
const bgStyle = {
  backgroundImage: `url(${"https://www.corriecooks.com/wp-content/uploads/2021/05/french-fries-instant-pot.jpg"})`,
  backgroundReapeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "centre",
};
const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden ">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <Toplist />
        <Banner/>
        <OurServices/>
      </div>
    </div>
  );
};

export default App;

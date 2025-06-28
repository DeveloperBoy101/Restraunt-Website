import React from "react";

const FoodData = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/021/950/173/non_2x/white-plate-with-caprese-salad-isolated-on-a-transparent-background-png.png",
    rating: "⭐⭐⭐⭐⭐",
    Price: "$10.99",
    name: "Sopa de pollo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/024/106/558/non_2x/tasty-vegetables-buddha-bowl-on-transparent-background-png.png",
    rating: "⭐⭐⭐⭐⭐",
    Price: "$15.99",
    name: "Pesce alla griglia",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elite. "
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/021/950/173/non_2x/white-plate-with-caprese-salad-isolated-on-a-transparent-background-png.png",
    rating: "⭐⭐⭐⭐⭐",
    Price: "$20.99",
    name: "Pesce alla griglia",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/021/950/173/non_2x/white-plate-with-caprese-salad-isolated-on-a-transparent-background-png.png",
    rating: "⭐⭐⭐⭐⭐",
    Price: "$25.99",
    name: "Poshaier Vakuim Posre",
    desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elite."
  },
];

const Toplist = () => {
  return (
    <>
      <div className="container py-14">
        {/* Header Section */}
        <h1 className="text-3xl font-semibold text-center">Top list</h1>
        <p className="text-center mt-2">Our Top List</p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   gap-6 py-4 px-3 place-items-center">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="border-2  rounded-3xl  w-[250px]  h-[340px]  cursor-pointer justify-center flex flex-col items-center bg-white/50 hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-[200px] flex justify-centre items-center "
            />
            <div className="p-2 m-2 space-y-2">
            <p className="text-red-500">{item.rating}</p>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>{item.desc}</p>
              <p className="text-gray-700 font-bold">{item.Price}</p>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toplist;

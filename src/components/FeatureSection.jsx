import { features } from "../constants";
import React from "react";

const FeatureSection = () => {
  const handleAddToCart = (feature) => {
    // Logic to handle adding to cart
    console.log(`Added ${feature.text} to cart`);
  };

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      {/* Header Section */}
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      {/* Features List */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="mt-1 mb-2 text-xl font-semibold">
                  {feature.text}
                </h5>
                <p className="text-md mb-6 text-neutral-500">
                  {feature.description}
                </p>
                <button
                  onClick={() => handleAddToCart(feature)}
                  className="bg-orange-500 text-white px-4 py-2 rounded mt-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

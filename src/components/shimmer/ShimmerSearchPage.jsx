import React from "react";
import "./shimmer.css";

const ShimmerSearchPage = () => {
  return (
    <div className="p-4 ml-0 lg:ml-60  ">
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className=" flex flex-col md:flex-row items-center bg-gray-200 p-4 gap-4 mb-4"
        >
          <div className="shimmer  w-80 h-44 rounded-lg" />
          {/* Placeholder for Thumbnail */}

          <div className=" flex-1">
            <div className="shimmer  w-[50%] h-5 mb-3 rounded-lg" />
            {/* Placeholder for Title */}
            <div className="shimmer  w-[20%] h-4 rounded-lg" />
            {/* Placeholder for Channel Info */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerSearchPage;

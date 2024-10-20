import "./shimmer.css"
const ShimmerCard = () => {

  const shimmerCards = Array.from({ length: 20 });

  return (
    <div className="overflow-y-scroll h-screen w-full ">
      <div className="ml-30 mt-4  bg-white  mx-auto  flex  justify-center flex-wrap gap-6 overflow-hidden">
        {shimmerCards.map((_, index) => (
          <div
            key={index}
            className=" h-68 w-72  rounded-lg px-2 py-3 mb-2 bg-gray-200 "
          >
            <div className="shimmer w-full h-40 rounded-lg mb-2"></div>

            <div className="flex gap-4 mt-2">
              <div className="shimmer w-10 h-10 rounded-full"></div>
              <div className="flex flex-col justify-between">
                <div className="shimmer w-32 h-4 rounded mb-1"></div>
                <div className="shimmer w-24 h-4 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCard;

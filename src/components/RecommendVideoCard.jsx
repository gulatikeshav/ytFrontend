import React from "react";
import { DUMMY_THUMBNAIL_URL } from "../utils/constants";

const RecommendVideoCard = React.memo(({ data }) => {
  const { snippet } = data;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-screen xl:w-full p-2 mb-2 flex lg:flex-row flex-col lg:items-center gap-3 ">
      <div className="w-screen lg:w-5/12 flex-shrink-0">
        {thumbnails?.medium?.url ? (
          <img
            src={thumbnails?.medium?.url}
            alt=""
            className="xl:w-full h-auto xl:h-24 2xl:h-56 rounded-lg border flex-shrink-0"
          />
        ) : (
          <img
            src={DUMMY_THUMBNAIL_URL}
            alt=""
            className="w-full h-auto xl:h-24 2xl:h-56 rounded-lg flex-shrink-0"
          />
        )}
      </div>
      <div className="flex gap-4 xl:mt-2">
        <div>
          <p className="text-sm font-bold 2xl:text-3xl line-clamp-2">{title}</p>
          <h1 className="text-sm py-1 2xl:text-2xl text-gray-500">
            {channelTitle}
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
});

export default RecommendVideoCard;

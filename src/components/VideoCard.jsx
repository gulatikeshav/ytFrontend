import React from "react";
import { DUMMY_THUMBNAIL_URL } from "../utils/constants";

const VideoCard = ({ data }) => {
  // console.log(data);

  const { snippet } = data;

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className=" w-full p-2 mb-2 ">
      {thumbnails?.maxres?.url ? (
        <img
          src={thumbnails?.maxres?.url}
          alt=""
          className="w-full rounded-lg border"
        />
      ) : (
        <img
          src={DUMMY_THUMBNAIL_URL}
          alt=""
          className="w-[480px] h-auto 2xl:h-[351.88px] 2xl:w-[624px] rounded-lg border"
        />
      )}

      <div className="flex  gap-4 mt-2 ">
        {thumbnails?.maxres?.url ? (
          <img
            src={thumbnails?.maxres?.url}
            alt=""
            className="size-8 rounded-full"
          />
        ) : (
          <img
            src={DUMMY_THUMBNAIL_URL}
            alt=""
            className="size-8 rounded-full"
          />
        )}
        <div className="">
          <p className="text-sm font-bold line-clamp-2 2xl:text-2xl">{title}</p>
          <h1 className="text-sm py-1 2xl:text-xl">{channelTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

import React, { useCallback, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GOOGLE_VIDEO_API } from "../utils/constants";
import ShimmerCard from "./shimmer/ShimmerCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  const isSideBarOpen = useSelector((state) => state.sidebarToggle.isMenuOpen);

  const fetchVideos = useCallback(async () => {
    if (videos) return;
    try {
      const response = await fetch(GOOGLE_VIDEO_API);
      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }
      const json = await response.json();
      setVideos(json.items);
    } catch (err) {
      console.log("Error occured", err);
    }
  }, [videos]);

  useEffect(() => {
    fetchVideos();
  }, []);

  if (videos === null) return <ShimmerCard />;

  return (
    <div
      className={`w-full grid grid-col-1 md:grid-cols-2 ${
        isSideBarOpen ? "xl:grid-cols-3 " : "xl:grid-cols-4"
      } overflow-y-scroll  justify-items-center  h-[calc(100vh-139px)] mx-auto `}
    >
      {videos?.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

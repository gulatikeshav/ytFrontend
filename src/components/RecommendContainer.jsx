import React, { useEffect, useState, useCallback } from "react";
import RecommendVideoCard from "./RecommendVideoCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { RAPID_API_KEY } from "../utils/constants";
import json from "../utils/searchResults.json";

const SuggestionContainer = () => {
  const [recommendVideo, setRecommendVideo] = useState(null);

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const fetchVideos = useCallback(async () => {
    // console.log("api suggest call ");
    const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${searchParams.get(
      "v"
    )}&part=id%2Csnippet&type=video&maxResults=50`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setRecommendVideo(data.items);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setRecommendVideo(json.items);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (!recommendVideo) {
      fetchVideos();
    }
  }, [recommendVideo, fetchVideos]);

  if (recommendVideo === null) return null;

  return (
    <div className="rounded mt-4 border w-screen xl:w-full 2xl:mt-12">
      <h4 className="text-2xl text-center border-b-2 font-medium text-gray-700 my-4 2xl:text-4xl 2xl:p-2">
        Suggested Videos
      </h4>
      <div>
        {recommendVideo?.map((video) => {
          return (
            <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
              <RecommendVideoCard data={video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestionContainer;

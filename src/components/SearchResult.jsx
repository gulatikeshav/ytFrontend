import React, { useCallback, useEffect, useState } from "react";
import { SEARCH_QUERY_RESULTS_VIDEOS } from "../utils/constants";
import { useSearchParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShimmerSearchPage from "./shimmer/ShimmerSearchPage";
// import json from "../utils/searchResults.json";

const SearchResult = () => {
  const [searchResultVideos, setSearchResultsVideos] = useState(null);
  const [searchParams] = useSearchParams();
  const isSideBarOpen = useSelector((state) => state.sidebarToggle.isMenuOpen);

  let searchValue = searchParams.get("search_query");

  const fetchQueryResults = useCallback(async () => {
    // console.log("search result call");

    if (!searchValue) return;
    const data = await fetch(SEARCH_QUERY_RESULTS_VIDEOS + searchValue);
    const json = await data.json();
    setSearchResultsVideos(json.items);
  }, [searchValue]);

  useEffect(() => {
    fetchQueryResults();
    // setSearchResultsVideos(json.items);
  }, [searchValue]);

  if (searchResultVideos === null) return <ShimmerSearchPage />;

  return (
    <div className={`${isSideBarOpen ? "xl:ml-60 w-auto" : "w-full"}`}>
      {searchResultVideos?.map((video) => {
        const { id, snippet } = video;
        const { videoId } = id;
        const { thumbnails, title, channelTitle } = snippet;
        const { url } = thumbnails.medium;

        return (
          <Link to={`/watch?v=${videoId}`} key={title}>
            <div className="flex flex-col lg:flex-row px-2 py-4 my-2 items-center md:items-start lg:items-center lg:gap-4">
              <div className="w-full lg:w-[28rem] xl:w-[30rem] 2xl:w-[60rem] flex-shrink-0">
                <img
                  src={url}
                  alt={title}
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="md:mt-3 lg:mt-0">
                <p className="md:text-xl 2xl:text-5xl 2xl:py-8 xl:py-3 2xl:leading-extra-loose">
                  {title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src={thumbnails.default.url}
                    alt="channel"
                    className="rounded-full h-8 w-8"
                  />
                  <p className="text-sm text-gray-500 md:text-lg 2xl:text-3xl">
                    {channelTitle}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResult;

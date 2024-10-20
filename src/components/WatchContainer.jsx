import React from "react";
import WatchPage from "./WatchPage";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";
import SuggestionContainer from "./RecommendContainer";

const WatchContainer = () => {
  const isSideBarOpen = useSelector((state) => state.sidebarToggle.isMenuOpen);

  return (
    <div
      className={`flex justify-between mt-20 h-screen w-screen  xl:justify-normal xl:gap-4 flex-col xl:flex-row 2xl:mt-40 ${
        isSideBarOpen ? "opacity-90 " : ""
      } `}
    >
      <div className="flex flex-col w-screen xl:w-[65rem] 2xl:w-8/12 mx-auto xl:mx-2">
        <WatchPage />
        <CommentsContainer />
      </div>

      <div className="w-screen xl:w-[27rem] 2xl:w-4/12 lg:mr-2 mx-auto ">
        <LiveChat />
        <SuggestionContainer />
      </div>
    </div>
  );
};

export default WatchContainer;

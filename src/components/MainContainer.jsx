import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../redux/menuToggle";

const MainContainer = () => {
  const isSideBarOpen = useSelector((state) => state.sidebarToggle.isMenuOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div
      className={`fixed w-full  ${
        isSideBarOpen ? "xl:w-10/12 xl:ml-60 " : "w-full ml-0 "
      } h-screen `}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

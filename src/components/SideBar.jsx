import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const isSideBarOpen = useSelector((state) => state.sidebarToggle.isMenuOpen);
  const navigate = useNavigate();
  if (!isSideBarOpen) return null;

  const sidebarItems1 = [
    {
      id: 1,
      name: "Home",
      icon: (
        <Link to={"/"}>
          <GoHome size={22.4} />
        </Link>
      ),
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts size={22.4} />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions size={22.4} />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin size={22.4} />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory size={22.4} />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions size={22.4} />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo size={"22.4px"} />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater size={22.4} />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike size={22.4} />,
    },
  ];

  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro size={22.4} />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag size={22.4} />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic size={22.4} />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight size={22.4} />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive size={22.4} />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline size={22.4} />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper size={22.4} />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup size={22.4} />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint size={22.4} />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight size={22.4} />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts size={22.4} />,
    },
  ];

  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube size={22.4} />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio size={22.4} />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic size={22.4} />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids size={22.4} />,
    },
  ];

  const handleSuggestion = (name) => {
    navigate("/results?search_query=" + encodeURI(name));
  };

  return (
    <div className="w-52  p-3 overflow-y-scroll z-20 bg-white  h-[calc(100vh-60px)]  fixed  2xl:w-2/12">
      {sidebarItems1.map(({ id, name, icon }) => {
        return (
          <div
            key={id}
            className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer  gap-3 2xl:gap-6 2xl:px-4 w-full p-1 px-2 mb-2 2xl:text-2xl"
          >
            <span className=""> {icon}</span>
            <span>{name}</span>
          </div>
        );
      })}

      <hr className="w-full py-2" />
      {sidebarItems2.map(({ id, name, icon }) => {
        return (
          <div
            key={id}
            className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer  gap-3 w-full p-1 mb-2 2xl:text-2xl 2xl:gap-6 2xl:px-4"
          >
            <span className=""> {icon}</span>
            <span>{name}</span>
          </div>
        );
      })}
      <hr className="w-full py-2" />

      {sidebarItems3.map(({ id, name, icon }) => {
        return (
          <div
            key={id}
            className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer   gap-3 w-full p-1 mb-2 2xl:text-2xl 2xl:gap-6 2xl:px-4"
            onClick={() => handleSuggestion(name)}
          >
            <span className=""> {icon}</span>
            <span>{name}</span>
          </div>
        );
      })}
      <hr className="w-full py-2" />

      {sidebarItems4.map(({ id, name, icon }) => {
        return (
          <div
            key={id}
            className="flex items-center hover:bg-gray-200 rounded-lg cursor-pointer  gap-3 w-full p-1 mb-2 2xl:text-2xl 2xl:gap-6 2xl:px-4"
          >
            <span className=""> {icon}</span>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;

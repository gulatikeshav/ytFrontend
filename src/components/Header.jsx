import React, { useEffect, useState } from "react";
import { BiVideoPlus } from "react-icons/bi";
import { FaBars, FaBell, FaUser, FaYoutube } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/menuToggle";
import { SEARCH_API_URL } from "../utils/constants";
import { chacheResults } from "../redux/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    if (searchQuery.trim() !== "") {
      const data = await fetch(SEARCH_API_URL + searchQuery);

      const json = await data.json();
      setSuggestions(json[1]);

      dispatch(
        chacheResults({
          [searchQuery]: json[1],
        })
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleSuggestion = (e, suggest) => {
    if (suggest) {
      setSearchQuery(suggest);
      navigate("/results?search_query=" + encodeURI(suggest));
    }
    setShowSuggestions(false);

    if (e.key === "Enter") {
      navigate("/results?search_query=" + encodeURI(searchQuery));
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSuggestion(e, searchQuery);
    }
  };

  return (
    <div className="flex bg-white justify-between items-center w-full p-3 h-20 fixed z-10 top-0 2xl:h-40">
      <div className="flex items-center gap-2 md:gap-5 w-3/12">
        <FaBars
          size={32}
          onClick={() => dispatch(toggleMenu())}
          className="cursor-pointer"
        />
        <Link to={"/"}>
          <FaYoutube size={48} className="text-red-600 " />
        </Link>
      </div>

      <div className="flex flex-col items-center w-8/12  md:w-6/12 relative">
        <div className="flex items-center w-full relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="py-2 px-5 2xl:py-8 2xl:text-3xl text-lg rounded-l-full w-full outline-none h-10 border border-black "
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={(e) => handleEnter(e)}
          />

          {searchQuery !== "" ? (
            <span
              className="absolute  p-1 right-12 cursor-pointer hover:bg-gray-200 rounded-full "
              onClick={() => {
                setSearchQuery("");
                setShowSuggestions(false)
              }}
            >
              <RxCross1 size={20} />
            </span>
          ) : (
            ""
          )}

          <IoIosSearch
            size={32}
            className="h-10 w-12 border border-black rounded-r-full p-2 2xl:p-8  2xl:w-20 cursor-pointer"
            onClick={(e) => handleSuggestion(e, searchQuery)}
          />
        </div>

        {showSuggestions && (
          <div className=" fixed top-16 left-0 md:absolute md:top-10 w-screen  md:w-full bg-white border  rounded-lg 2xl:top-[4.2rem]">
            <ul className=" w-full  font-bold ">
              {suggestions &&
                suggestions?.map((suggest, index) => {
                  return (
                    <li
                      className="py-2 px-5 flex  gap-2 items-center cursor-default hover:bg-gray-200 w-full 2xl:p-4 2xl:text-3xl"
                      onMouseDown={(e) => handleSuggestion(e, suggest)}
                      key={index}
                    >
                      <IoIosSearch size={19.2} />
                      <span>{suggest}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>

      <div className="  hidden md:flex  items-center justify-end gap-8  md:w-3/12">
        <BiVideoPlus size={32} />
        <FaBell size={32} />
        <FaUser size={32} />
      </div>
    </div>
  );
};

export default Header;

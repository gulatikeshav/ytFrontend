import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center 2xl:items-start 2xl:gap-3 mb-6 2xl:py-2">
      <div className="m-3 flex-shrink-0">
        <img className="h-8 rounded-full" alt="user" src={USER_ICON} />
      </div>
      <div className="">
        <p className="font-semibold text-xs 2xl:text-2xl">{name}</p>
        <p className="text-sm 2xl:text-3xl text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Comment;

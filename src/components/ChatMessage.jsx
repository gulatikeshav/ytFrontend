import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = React.memo(({ name, message }) => {
  return (
    <div className="flex mb-3 gap-4 2xl:my-3">
      <FaUserCircle size={"2.3rem"} />
      <div className="flex flex-col">
        <span className="text-gray-600 2xl:text-2xl">{name}</span>
        <span className="2xl:text-3xl">{message}</span>
      </div>
    </div>
  );
});

export default ChatMessage;

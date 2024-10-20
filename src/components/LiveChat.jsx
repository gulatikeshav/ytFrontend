import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addChat } from "../redux/chatSlice";
import { FaUserCircle } from "react-icons/fa";
import { DUMMY_LIVE_CHAT_DATA } from "../utils/constants";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [isShowChat, setIsShowChat] = useState(true);
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  const ref = useRef(0);

  const fetchData = useCallback(async () => {
    const data = await fetch(DUMMY_LIVE_CHAT_DATA + ref.current);
    const json = await data.json();
    dispatch(
      addChat({
        name: json.results[0].name,
        message: json.results[0].url,
      })
    );
    ref.current += 1;
  }, [dispatch]);

  useEffect(() => {
    const timer = setInterval(fetchData, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [fetchData]);

  return (
    <div className="border rounded border-gray-300 px-2 w-screen xl:w-full">
      <h4 className="text-2xl text-center border-b-2 font-medium text-gray-700 my-4 2xl:text-4xl 2xl:p-2">
        LiveChat
      </h4>

      {isShowChat ? (
        <>
          <div className="overflow-y-scroll h-[36rem] flex flex-col-reverse">
            {chatMessages.map((msg, index) => {
              return (
                <ChatMessage
                  message={msg.message}
                  key={index}
                  name={msg.name}
                />
              );
            })}
          </div>

          <form
            className="w-full border mb-8 px-1"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addChat({
                  name: "Keshav Gulati",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            <div className="flex gap-2 mt-2">
              <FaUserCircle size={"2.3rem"} />
              <div className="flex flex-col w-full px-2">
                <span className="text-gray-500 2xl:text-2xl">
                  Keshav Gulati
                </span>

                <input
                  type="text"
                  placeholder="enter your comment here..."
                  value={liveMessage}
                  onChange={(e) => setLiveMessage(e.target.value)}
                  className="w-full outline-none border-b-2 pt-3 2xl:text-3xl"
                />
              </div>
            </div>

            <div className="py-1 flex justify-end">
              <button className="border py-1 px-2 rounded-full 2xl:text-3xl">
                Send
              </button>
            </div>
          </form>
        </>
      ) : (
        <button
          onClick={() => setIsShowChat(true)}
          className="text-center mb-3 w-full p-1 border rounded-lg 2xl:text-2xl"
        >
          Show Chat
        </button>
      )}

      {isShowChat && (
        <button
          className="text-center mb-3 w-full p-1 2xl:p-2 border rounded-lg 2xl:text-4xl"
          onClick={() => setIsShowChat(false)}
        >
          Hide Chat
        </button>
      )}
    </div>
  );
};

export default LiveChat;

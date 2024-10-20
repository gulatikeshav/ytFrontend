import { useNavigate } from "react-router-dom";

const ButtonList = () => {
  const navigate = useNavigate();
  const categories = [
    "React js",
    "Music",
    "React routers",
    "Computer programming",
    "TypeScript",
    "Cartoons",
    "India national cricket team",
    "News",
    "Punjabi Movies",
    "Songs",
    "Telugu cinema",
    "Gaming",
    "Dramedy",
    "Dubbing",
    "Funny Movies",
    "Cricket",
    "Football",
    "Learn Coding",
  ];

  const handleSuggestionList = (category) => {

    
    navigate("/results?search_query=" + encodeURI(category));
  };

  return (
    <div
      className={`flex items-center whitespace-nowrap overflow-x-scroll w-full `}
    >
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="border px-3 py-1 mx-1 mb-4 rounded-lg text-lg "
            onClick={() => handleSuggestionList( category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;

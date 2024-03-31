import { NETFLIX_BACKGROUND } from "../../../utils/constants.jsx";
import GptSearchBar from "./GptSearchBar.jsx";
import OpenAISuggestions from "./OpenAISuggestions";


const OpenAIGptSearch = () => {
  return (
    <div className="w-full">
      <div className='absolute -z-10' >
        <img src={NETFLIX_BACKGROUND}
          alt="background" />
      </div>
      <GptSearchBar />
      <OpenAISuggestions />
    </div>
  )
}

export default OpenAIGptSearch;
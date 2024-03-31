import { useSelector } from "react-redux";
import Language from "../../../utils/languageConstants.jsx";


const GptSearchBar = () => {
  const languageKey = useSelector(store => store.config.lang)
 
  return (
    <div className="pt-[10%] flex justify-center w-full">
      <form className="bg-black py-2 px-2 w-1/2 grid  grid-cols-12 ">

        <input type="text" placeholder={Language[languageKey]?.gptPlaceHolder}
          className="py-1 col-span-9 px-6 rounded-md outline-none border-none" />
        <button className="bg-[#C11119] col-span-3 text-white mx-2 px-6 py-1 rounded-md ">{Language[languageKey]?.search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar;
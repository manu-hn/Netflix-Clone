import { useSelector } from "react-redux";
import Language from "../../../utils/languageConstants.jsx";
import { useRef, useState } from "react";
import { openai } from "../../../utils/openai.jsx";


const GptSearchBar = () => {
  const languageKey = useSelector(store => store.config.lang);
  const searchRef = useRef(null);


  const handleGPTSuggestions = async () => {
    const searchQuery = `Act as a one of the best movie recommendation system for me and suggest some movies for the query :
   ${searchRef.current.value}
   . Only Give me 5 movie names, comma separated like the examples results given ahead. 
   Example Results : Katera, Kotigobba 2 , Kantara, KGF, James  .
   `

    const response = await openai.chat.completions.create({
      messages: [{ role: 'assistant', content: searchQuery }],
      model: 'gpt-3.5-turbo',
    });

    console.log(response.choices)
  }

  return (
    <div className="pt-[10%] flex justify-center w-full">
      <form className="bg-black py-2 px-2 w-1/2 grid  grid-cols-12 " onSubmit={e => e.preventDefault()}>

        <input type="text" placeholder={Language[languageKey]?.gptPlaceHolder}
          ref={searchRef}
          className="py-1 col-span-9 px-6 rounded-md outline-none border-none" />
        <button
          className="bg-[#C11119] col-span-3 text-white mx-2 px-6 py-1 rounded-md "
          onClick={handleGPTSuggestions}>{Language[languageKey]?.search}</button>

      </form>
    </div>
  )
}

export default GptSearchBar;
import { useDispatch, useSelector } from "react-redux";
import Language from "../../../utils/languageConstants"
import { API_OPTIONS, SEARCH_MOVIE_API_PART_1, SEARCH_MOVIE_API_PART_2 } from "../../../utils/constants";
import { useState } from "react";
import { addSearchedMovies } from "../../../redux/slices/movieSlice";
import MovieCard from "./MovieCard";



const SearchMovies = () => {
    const languageKey = useSelector(store => store.config.lang);
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const searchedMovies = useSelector(store => store?.movies?.searchedMovies)


    const handleSearchSubmit = async () => {
        const response = await fetch(SEARCH_MOVIE_API_PART_1 + searchText + SEARCH_MOVIE_API_PART_2, API_OPTIONS);
        const jsonResponse = await response.json();

        dispatch(addSearchedMovies(jsonResponse?.results))
    }

    return (
        <div className="pt-[10%] flex justify-center w-full mt-14 md:mt-4">
            <form className="bg-black py-2 px-2 w-[90%] md:w-1/2 grid  grid-cols-12 " onSubmit={e => e.preventDefault()}>

                <input type="text" placeholder={Language[languageKey]?.gptPlaceHolder}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="py-1 col-span-9 px-6 rounded-md outline-none border-none placeholder:text-xs lg:placeholder:text-sm md:placeholder:text-xs" />
                <button
                    className="bg-[#C11119] col-span-3 text-white px-3 mx-1 md:mx-4  py-1 text-center rounded-md text-xs  lg:px-6 md:px-3 lg:text-sm md:text-xs"
                    onClick={handleSearchSubmit}>{Language[languageKey]?.search}</button>

            </form>
          


        </div>
    )
}

export default SearchMovies;
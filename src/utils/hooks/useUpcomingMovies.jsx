import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../constants"
import { useEffect } from "react";
import { addUpcomingMovies } from "../../redux/slices/movieSlice";



const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    async function getPopularMovies() {
        const response = await fetch(UPCOMING_MOVIES, API_OPTIONS);
        const jsonResponse = await response.json();
      
        dispatch(addUpcomingMovies(jsonResponse?.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default useUpcomingMovies
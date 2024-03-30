import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../../redux/slices/movieSlice";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    async function getPopularMovies() {
        const response = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
        const jsonResponse = await response.json();
       

        dispatch(addTopRatedMovies(jsonResponse?.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])


}

export default useTopRatedMovies
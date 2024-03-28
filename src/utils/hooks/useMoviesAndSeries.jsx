import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../redux/slices/movieSlice";
import { API_OPTIONS, TMDB_API } from "../constants";


const useMoviesAndSeries = () => {
    const dispatch = useDispatch()

    const getRecentMoviesAndSeries = async () => {

        const response = await fetch(TMDB_API, API_OPTIONS)
        const data = await response.json();
        console.log(data.results)
        dispatch(addNowPlayingMovies(data.results))

    }

    useEffect(() => {
        getRecentMoviesAndSeries();
    }, []);

    return {
        getRecentMoviesAndSeries
    }


}

export default useMoviesAndSeries
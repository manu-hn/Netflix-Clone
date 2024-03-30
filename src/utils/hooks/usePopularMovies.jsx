import { useEffect } from 'react'
import { API_OPTIONS, POPULAR_MOVIES } from '../constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../../redux/slices/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    async function getPopularMovies() {
        const response = await fetch(POPULAR_MOVIES, API_OPTIONS);
        const jsonResponse = await response.json();
       

        dispatch(addPopularMovies(jsonResponse?.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;
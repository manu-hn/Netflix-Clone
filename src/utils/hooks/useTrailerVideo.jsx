import { useEffect } from 'react'
import { useDispatch, } from 'react-redux';
import { API_OPTIONS, TRAILER_API } from '../constants';
import { addTrailerVideo } from '../../redux/slices/movieSlice';

const useTrailerVideo = (movieId) => {

    const dispatch = useDispatch();
    
    const getMovieTrailer = async () => {

        const response = await fetch(TRAILER_API + `${movieId}/videos`, API_OPTIONS);
        const jsonResponse = await response.json();


        const filteredVideos = jsonResponse.results.filter(video => video.type === 'Trailer' && video?.name === 'Official Trailer');

        const [trailer] = filteredVideos.length ? filteredVideos : jsonResponse.results[0];

       
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(() => {
        getMovieTrailer()
    }, [])

}

export default useTrailerVideo
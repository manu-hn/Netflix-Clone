import { useEffect, useState, } from "react";
import { MOVIE_INFO, API_OPTIONS } from "../constants";


const useMovieInfo = (movieId) => {
    const [trailerVideos, setTrailerVideos] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState(null);


    const fetchMovieInfo = async () => {
        try {
            const infoResponse = await fetch(MOVIE_INFO + movieId + "/videos", API_OPTIONS);
            const detailResponse = await fetch(MOVIE_INFO + movieId, API_OPTIONS);

            const info = await infoResponse.json();
            const details = await detailResponse.json();

            const filteredVideos = info.results.filter(video => video.type === 'Trailer');
            const [trailer] = filteredVideos.length ? filteredVideos : info.results[0];
            setRelatedVideos(info)
            setTrailerVideos(trailer);
            setMovieDetails(details)
            
        } catch (error) {
            throw new Error(error)
        }
    }




    useEffect(() => {
        fetchMovieInfo()

    }, [])

    return {
        trailerVideos, movieDetails,relatedVideos
    }

}

export default useMovieInfo
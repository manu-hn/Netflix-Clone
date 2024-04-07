
import { useSelector } from 'react-redux';
import { NETFLIX_BACKGROUND } from '../../../utils/constants'
import SearchMovies from './SearchMovies';
import MovieCard from './MovieCard';


const MovieSearchContainer = () => {
    const searchedMovies = useSelector(store => store?.movies?.searchedMovies)
    return (
        <div className='w-full flex flex-col items-center  aspect-video'>

            <div className='absolute -z-10' >
                <img className='h-screen w-screen lg:h-full md:h-screen' src={NETFLIX_BACKGROUND}
                    alt="background" />
            </div>
            <SearchMovies />
            <div className='mt-6 w-full flex justify-center  '>
                <div className={`flex w-full mx-4 lg:mx-32 md:mx-14 flex-wrap ${searchedMovies.length > 0 ? 'bg-black' : 'bg-none'}
                 rounded-lg  py-2  justify-evenly  overflow-scroll h-72 no-scrollbar`}>
                    {
                        searchedMovies.map((movie) => (<MovieCard key={movie?.id} movie={movie} />))
                    }
                </div>

            </div>
        </div>
    )
}

export default MovieSearchContainer
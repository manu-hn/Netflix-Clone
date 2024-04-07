import { useSelector } from "react-redux"
import MovieList from "../movies/MovieList"


const SecondaryRowsContainer = () => {

  const moviesInfo = useSelector(store => store?.movies?.moviesInfo);
  const popularMovies = useSelector(store => store?.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies);
  const upComingMovies = useSelector(store => store?.movies?.upcomingMovies);


  return (
    <div className="bg-black text-white ">

      <div className="relative w-full  mt-[10rem] lg:-mt-[14rem] lg:pl-10 md:pl-4 md:-mt-[5rem] sm:mt-[8.5rem]    z-10">
        <MovieList movies={moviesInfo} title={'Now Playing...'} />
        <MovieList movies={upComingMovies} title={'Up Coming'} />
        <MovieList movies={popularMovies} title={'Popular Movies'} />
        <MovieList movies={topRatedMovies} title={'Top Rated Movies'} />
      </div>
    </div>
  )
}

export default SecondaryRowsContainer
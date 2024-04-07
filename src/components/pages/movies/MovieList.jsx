import PropTypes from "prop-types"
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {


  return (
    <div className=" mx-1 md:mx-4  ">
      <h1 className="mx-2 md:mx-8 text-sm md:text-2xl mb-1 md:mb-2 font-bold md:my-3">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar  mx-8 ">

        <div className="flex   ">

          {
            movies?.map((movie) => (<Link to={`/movie-info/${movie?.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>))
          }


        </div>


      </div>
    </div>
  )
}
MovieList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array
}
export default MovieList
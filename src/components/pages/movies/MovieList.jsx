import PropTypes from "prop-types"
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  return (
    <div className=" mx-4 ">
      <h1 className="mx-8 text-2xl mb-2 font-bold my-3">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar  mx-8 ">

        <div className="flex   ">

          {
            movies?.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
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
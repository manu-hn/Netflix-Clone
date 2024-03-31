import PropTypes from "prop-types";
import { IMAGE_CDN_LINK } from "../../../utils/constants";

const MovieCard = ({ movie }) => {
  
  return (
    <div className=" w-[11.5rem] mr-4 rounded-lg">
      <div>
        <img className='h-64 rounded-lg' src={IMAGE_CDN_LINK + movie?.poster_path} alt={movie?.title} />
      </div>

    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object
}
export default MovieCard
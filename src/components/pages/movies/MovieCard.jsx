import PropTypes from "prop-types";
import { IMAGE_CDN_LINK } from "../../../utils/constants";

const MovieCard = ({ movie }) => {
 
  return (
    <div className="w-[7rem] lg:w-[14rem] md:w-44 h-56 md:h-72 rounded-lg m-2 md:m-2 ">
      <div className="">
        <img className=' h-48 md:h-64 rounded-lg ' src={IMAGE_CDN_LINK + movie?.poster_path} alt={movie?.title} />



      </div>
      <div className=" -mt-14 md:-mt-16  z-10 flex flex-col px-2 items-center  text-white w-full md:w-[75%]  ">
        <h1 className="text-xs bg-black opacity-65 rounded-t-lg w-full text-center md:py-2">{movie?.original_title ? movie?.original_title : movie?.original_name}</h1>
        
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object
}
export default MovieCard
import { useParams } from "react-router-dom";
import useMovieInfo from "../../utils/hooks/useMovieInfo";
import InfoTrailer from "./info/InfoTrailer.jsx";
import RelatedVideos from "./info/RelatedVideos.jsx";



const MovieInfo = () => {
  const { id } = useParams();
  const { movieDetails, trailerVideos, relatedVideos } = useMovieInfo(id)

  return (
    <div className=" w-full flex flex-col items-center text-white bg-black">
      <InfoTrailer youtubeKey={trailerVideos?.key} details={movieDetails} />

      <div className="w-5/6 flex flex-col ">
        <h1 className="text-xl lg:text-4xl md:text-3xl">Related Videos</h1>
        <RelatedVideos relatedVideos={relatedVideos?.results} />

      </div>
    </div>
  )
}

export default MovieInfo
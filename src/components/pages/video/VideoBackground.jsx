import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import useTrailerVideo from '../../../utils/hooks/useTrailerVideo';


const VideoBackground = ({ movieId }) => {

  useTrailerVideo(movieId)

  const trailerVideo = useSelector(store => store?.movies?.trailer)


  return (
    <div className='w-full aspect-video '>
    

      <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=v8irtDottZMRn6Qr&autoplay=1&mute=1`}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen  autoPlay></iframe>
    </div>
  )
}


VideoBackground.propTypes = {
  movieId: PropTypes.number,
}

export default VideoBackground
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';


const TrailerMainContainer = () => {
  const movies = useSelector(store => store.movies?.moviesInfo);


  if (movies.length === 0) return;

  const trailerMovie = movies[0];
 
  const { overview, original_title, id
  } = trailerMovie;
  return (
    <div className=''>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}



export default TrailerMainContainer
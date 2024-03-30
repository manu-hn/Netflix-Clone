
import useMoviesAndSeries from "../../utils/hooks/useMoviesAndSeries.jsx";
import TrailerMainContainer from "./video/TrailerMainContainer.jsx";
import SecondaryRowsContainer from "./video/SecondaryRowsContainer.jsx";
import usePopularMovies from "../../utils/hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../../utils/hooks/useTopRatedMovies.jsx";
import useUpcomingMovies from "../../utils/hooks/useUpcomingMovies.jsx";


const Browse = () => {
  useMoviesAndSeries();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
 


  return (
    <div>
      <TrailerMainContainer />
      <SecondaryRowsContainer />
    </div>
  )
}

export default Browse

import useMoviesAndSeries from "../../utils/hooks/useMoviesAndSeries.jsx";
import TrailerMainContainer from "./video/TrailerMainContainer.jsx";
import SecondaryRowsContainer from "./video/SecondaryRowsContainer.jsx";
import usePopularMovies from "../../utils/hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../../utils/hooks/useTopRatedMovies.jsx";
import useUpcomingMovies from "../../utils/hooks/useUpcomingMovies.jsx";
import OpenAIGptSearch from "./gpt/OpenAIGptSearch.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGpt = useSelector(store => store.openAi.showGptSearch);
  useMoviesAndSeries();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();



  return (
    <div>
      {
        showGpt ?
          <OpenAIGptSearch />
          :
          <>
            <TrailerMainContainer />

            <SecondaryRowsContainer />
          </>
      }
    </div>
  )
}

export default Browse
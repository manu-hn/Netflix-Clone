
import useMoviesAndSeries from "../../utils/hooks/useMoviesAndSeries.jsx";
import TrailerMainContainer from "./video/TrailerMainContainer.jsx";
import SecondaryRowsContainer from "./video/SecondaryRowsContainer.jsx";

const Browse = () => {
  useMoviesAndSeries();

  return (
    <div>
      <TrailerMainContainer />
      <SecondaryRowsContainer />
    </div>
  )
}

export default Browse
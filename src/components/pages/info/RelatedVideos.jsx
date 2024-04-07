import PropTypes from 'prop-types';
import RelatedMovie from "./RelatedMovie.jsx";

const RelatedVideos = ({ relatedVideos }) => {

    if(!relatedVideos) return;
    return (
        <div className='w-full flex overflow-y-auto no-scrollbar'>
            {
                relatedVideos.map((related) => <RelatedMovie key={related?.id} youtubeKey={related?.key} />)
            }
        </div>
    )
}

RelatedVideos.propTypes = {
    relatedVideos: PropTypes.array,
}

export default RelatedVideos;
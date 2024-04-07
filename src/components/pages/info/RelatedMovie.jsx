import PropTypes from 'prop-types';


const EachMovieInfo = ({youtubeKey}) => {


  if(!youtubeKey) return (
    <div className='w-96 bg-gray-100 h-56'>

    </div>
  )
  return (
    <div className='my-4 mx-3 w-[28rem]'>
      <div className='w-full '>
        <iframe className='w-[12rem] md:w-[22rem] h-[10rem] md:h-[12rem] ' src={`https://www.youtube.com/embed/${youtubeKey}?si=v8irtDottZMRn6Qr&mute=1`}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen autoPlay></iframe>
      </div>
      <p></p>
    </div>
  )
}
EachMovieInfo.propTypes = {
  youtubeKey : PropTypes.string,
}

export default EachMovieInfo
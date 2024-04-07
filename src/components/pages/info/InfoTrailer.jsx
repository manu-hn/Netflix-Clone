import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";


const InfoTrailer = ({ youtubeKey, details }) => {


    function minutesToHours(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return hours + 'h ' + remainingMinutes + 'm';
    }

    return (
        <div className='w-full flex justify-center pt-24 pb-8 '>
            <div className='w-[90%] md:w-5/6 flex justify-between'>
                <div className='w-full'>
                    <iframe className='w-full h-fit md:aspect-video -mt-4' src={`https://www.youtube.com/embed/${youtubeKey}?si=v8irtDottZMRn6Qr&autoplay=1&mute=1`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen autoPlay></iframe>


                    <div className='w-full flex flex-col '>
                        <h1 className='text-xl xl:text-5xl  '>{details?.title}</h1>
                        <div className='w-full  my-2'>
                            <ul className='leading-8 text-sm md:flex md:justify-evenly sm:flex-wrap items-center'>

                                <li>Released At : {details?.release_date}</li>
                                <li className='flex items-center'>IMDB Rating : {Math.floor(details?.vote_average)}
                                    <FaStar className='text-[#FFD700] mx-1' />  </li>
                                <li className='flex items-center md:text-sm sm:text-sm'><TbPointFilled />{minutesToHours(details?.runtime)}</li>
                                <li className='flex md:justify-between items-center'>
                                    {details?.homepage &&
                                        <FaLink className='text-xl mx-1' />
                                    }
                                    {details?.homepage}
                                </li>

                            </ul>
                        </div>
                        <p className='my-2 text-justify text-sm'>{details?.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

InfoTrailer.propTypes = {
    youtubeKey: PropTypes.string,
    details: PropTypes.object
}

export default InfoTrailer
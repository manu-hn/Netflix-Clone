import PropTypes from 'prop-types';
import { GoInfo } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import Language from "../../../utils/languageConstants.jsx";
import { useSelector } from 'react-redux';

const VideoTitle = ({ title, overview }) => {
    const languageKey = useSelector(store => store.config.lang);

    return (
        <div className='w-full pt-[50%] xl:pt-[20%] lg:pt-[15%] md:pt-[18%] pb-36 px-5 md:px-20 md:bg-opacity-25  absolute bg-black -z-10  md:z-10 text-white md:bg-gradient-to-r md:from-black'>
            <h1 className='font-bold text-sm lg:text-4xl md:text-3xl shadow-sm'>{title}</h1>
            <p className='w-full xl:w-2/4 xl:text-lg lg:w-4/5 md:w-4/5 my-2  md:my-6  text-[0.6rem] text-justify lg:text-[0.9rem] md:text-xs'>{overview}</p>
            <div className='flex w-full lg:w-1/4 md:w-1/3 justify-evenly my-1  md:my-4 '>
                <button className='flex items-center h-5  text-xs lg:text-[0.8rem] md:text-xs bg-white text-black   my-1 rounded-md  hover:opacity-80 px-3  md:mx-1 lg:px-5 md:px-3 md:py-4'> <FaPlay className='text-black mx-2' /> {Language[languageKey]?.play}</button>
                <button className='flex items-center h-5  text-xs lg:text-[0.8rem] md:text-xs bg-gray-500  text-white my-1 rounded-md hover:opacity-90 px-3 md:mx-1 lg:px-2 md:px-3 md:py-4'> <GoInfo className='text-white mx-1 font-semibold text-lg' /> {Language[languageKey]?.moreinfo}</button>
            </div>

        </div>
    )
}

VideoTitle.propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string
}
export default VideoTitle
import PropTypes from 'prop-types';
import { GoInfo } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import Language from "../../../utils/languageConstants.jsx";
import { useSelector } from 'react-redux';

const VideoTitle = ({ title, overview }) => {
    const languageKey = useSelector(store => store.config.lang);
    
    return (
        <div className='w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='font-bold text-6xl shadow-sm'>{title}</h1>
            <p className='w-1/3 my-5'>{overview}</p>
            <div className='flex w-1/4 justify-evenly my-4 '>
                <button className=' flex items-center bg-white text-black px-5  rounded-md py-2 hover:opacity-80'> <FaPlay className='text-black mx-2' /> {Language[languageKey]?.play}</button>
                <button className='flex items-center bg-gray-500  text-white py-2 px-2 rounded-md hover:opacity-90'> <GoInfo className='text-white mx-1 font-semibold text-lg' /> {Language[languageKey]?.moreinfo}</button>
            </div>

        </div>
    )
}

VideoTitle.propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string
}
export default VideoTitle
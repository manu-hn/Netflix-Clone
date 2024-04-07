import React from 'react';
import { FOOTER_DATA_FOUR, FOOTER_DATA_ONE, FOOTER_DATA_THREE, FOOTER_DATA_TWO } from '../utils/constants';


const Footer = () => {

    const styles = `leading-10 text-slate-500 text-opacity-75 hover:text-white cursor-pointer`
    return (
        <div className='w-full bg-black flex flex-col justify-center items-center'>
            <div className='my-6 h-2 bg-[#232323] w-full'>

            </div>
            <div className=' text-white  w-3/4 flex flex-col  pb-12'>
                <p className={`${styles} text-sm md:text-lg `} >Questions? Call 000-800-919-1694</p>
                <div className='flex flex-wrap md:flex-nowrap  justify-evenly'>

                    <div className='flex justify-between text-xs w-full md:text-sm sm:text-sm'>
                        <ul className=''>
                            {FOOTER_DATA_ONE.map((data) => <li className={`${styles}`} key={data}>{data}</li>)}
                        </ul>
                        <ul >
                            {FOOTER_DATA_TWO.map((data) => <li className={`${styles}`} key={data}>{data}</li>)}
                        </ul>
                    </div>

                    <div className='flex justify-evenly text-xs w-full md:text-sm  sm:text-sm'>
                        <ul>
                            {FOOTER_DATA_THREE.map((data) => <li className={`${styles}`} key={data}>{data}</li>)}
                        </ul>
                        <ul>
                            {FOOTER_DATA_FOUR.map((data) => <li className={`${styles}`} key={data}>{data}</li>)}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
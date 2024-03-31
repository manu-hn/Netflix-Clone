import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase.jsx';
import { loginUser, logoutUser } from '../redux/slices/userSlice';
import { netflix_logo } from '../utils/constants';
import { toggleGptSearchView } from '../redux/slices/openAiSlice.jsx';
import { LANGUAGE_CODES } from '../utils/languageConstants.jsx';
import { changeLanguage } from '../redux/slices/configSlice.jsx';
import Language from '../utils/languageConstants.jsx';



const Header = () => {
  const { userInfo } = useSelector(store => store.user);
  const languageKey = useSelector(store => store.config.lang);
  const showGptSearch = useSelector(store => store.openAi.showGptSearch);


  const navigate = useNavigate();
  const dispatch = useDispatch();


  const logoutHandler = async () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate('/error')
      throw new Error(error);
    });
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, 
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(loginUser({ uid, email, displayName, photoURL }));
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(logoutUser())
        navigate('/login')

      }
    });

    return () => unsubscribe();
  }, [])

  const handleSearchButtonClick = () => {
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='z-50 fixed px-8 py-2 bg-gradient-to-b from-black flex w-full justify-between items-center  '>

      <Link to={userInfo ? "/browse" : '/'}>
        <img className='w-24 sm:w-36 md:w-48' src={netflix_logo}
          alt="logo" />
      </Link>
      <div className='flex items-center'>
        <select name="" id="" onChange={handleLanguageChange}
          className='bg-transparent opacity-65 text-white rounded-lg h-9 overflow-y-scroll w-24 border-none outline-none'>
          {
            LANGUAGE_CODES.map((lang) => (
              <option key={lang?.code}
                className='bg-gray-900 px-4 text-white'
                value={lang?.code}>{lang?.name}
              </option>
            )
            )
          }

        </select>

        {
          userInfo ? (
            <div className=' opacity-85 text-black  w-[24rem] flex h-11 rounded-lg items-center'>
              <div className='flex items-center'>
                <img src={userInfo?.photoURL} className='w-16 h-10 mix-blend-multiply bg-transparent' alt="" />



              </div>
              {/* <Link className=''> */}
              <button className='mx-2 bg-slate-500 rounded-md h-9 text-white px-4 py-1 text-sm'
                onClick={handleSearchButtonClick}> {showGptSearch ? Language[languageKey].homePage : Language[languageKey].search}</button>
              {/* </Link> */}
              <button className='bg-[#C11119] rounded-lg h-9 px-6 text-white' onClick={() => logoutHandler()}>
                {Language[languageKey].logout}
              </button>
            </div>

          ) : <Link to={'/login'}>
            <button className='bg-[#C11119] rounded-lg h-10 px-8 text-white'>{Language[languageKey].login}</button> </Link>
        }
      </div>
    </div>
  )
}

export default Header
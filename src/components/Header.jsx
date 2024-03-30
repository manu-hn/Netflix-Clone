import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../Firebase.jsx';
import { loginUser, logoutUser } from '../redux/slices/userSlice';
import { netflix_logo } from '../utils/constants';





const Header = () => {
  const { userInfo } = useSelector(store => store.user);
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


  return (
    <div className='z-50 fixed px-8 py-2 bg-gradient-to-b from-black flex w-full justify-between items-center  '>

      <Link to={userInfo ? "/browse" : '/'}>
        <img className='w-24 sm:w-36 md:w-48' src={netflix_logo}
          alt="logo" />
      </Link>

      {
        userInfo ? (
          <div className=' opacity-85 text-black  w-[18rem] flex h-11 rounded-lg items-center'>
            <div className='flex'>
              <img src={userInfo?.photoURL} className='w-16 h-10 mix-blend-multiply bg-transparent' alt="" />


              <select name="" id="" className='bg-gray-500 opacity-65 rounded-lg mr-2 w-24 border-none outline-none'>

                <option className='bg-transparent' value="">Profile</option>
                <option className='bg-transparent' value="">Settings</option>
              </select>
            </div>
            <button className='bg-[#C11119] rounded-lg h-10 px-6 text-white' onClick={() => logoutHandler()}>
              Sign Out
            </button>
          </div>

        ) : <Link to={'/login'}>
          <button className='bg-[#C11119] rounded-lg h-10 px-8 text-white'>Sign In</button> </Link>
      }

    </div>
  )
}

export default Header
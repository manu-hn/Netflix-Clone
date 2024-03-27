import  { useEffect } from 'react'
import Select from 'react-dropdown-select'
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
    });
  }
  const options = [
    {
      id: 1,
      name: <div className='flex'>

        {userInfo?.displayName}
      </div>
    },
    {
      id: 2,
      name: <button className='text-red-600' onClick={() => logoutHandler()}>
        Sign Out
      </button>
    }
  ];


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

    return ()=> unsubscribe();
  }, [])


  return (
    <div className='z-10 absolute px-8 py-2 bg-gradient-to-b from-black flex w-full justify-between items-center'>

      <Link to={userInfo ? "/browse" : '/'}>
        <img className='w-24 sm:w-36 md:w-48' src={netflix_logo}
          alt="logo" />
      </Link>

      {
        userInfo ? (
          <div className='border bg-gray-100 opacity-85 text-black border-black w-[10rem] flex h-11 rounded-lg items-center'>
            <img src={userInfo?.photoURL} className='w-10 h-10 mix-blend-multiply' alt="" />
            <Select className='border border-red-800'
              options={options}
              dropdownGap={10}
              labelField="name"
              valueField="id"
              style={{ backgroundColor: "transparent", background: "transparent", color: "blue", width: "6rem", border: "none" }}
              closeOnScroll={true}
              color='white'

            />
          </div>

        ) : <Link to={'/login'}>
          <button className='bg-[#C11119] rounded-lg h-10 px-8 text-white'>Sign In</button> </Link>
      }

    </div>
  )
}

export default Header
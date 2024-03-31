
import Login from './auth/Login.jsx';
import SignUp from "./auth/SignUp.jsx";
import Browse from './pages/Browse.jsx';
import LayOut from "./LayOut.jsx";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const Body = () => {
    

    const rootRouter = createBrowserRouter([
        {
            path: '/',
            element: <LayOut />,
            children: [
                {
                    path: "/",
                    element: <SignUp />
                },
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/browse',
                    element: <Browse />
                }
            ]
        },

    ])


   
    return (
        <div className=''>
            <RouterProvider router={rootRouter} />
        </div>
    )
}

export default Body
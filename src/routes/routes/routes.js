import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../pages/Category/Category';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import News from '../../pages/News/News/News';
import Profile from '../../pages/Others/Profile/Profile';
import TermsAndConditions from '../../pages/Others/TermsAndConditions/TermsAndConditions';
import Register from '../../pages/Register/Register';
import PrivateRoute from '../../pages/shared/Routes/PriveteRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://dragon-newsss-server.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader:({params})=>fetch(`https://dragon-newsss-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute> ,
                loader: ({params})=> fetch(`https://dragon-newsss-server.vercel.app/news/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])
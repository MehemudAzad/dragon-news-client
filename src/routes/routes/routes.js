import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Category from '../../pages/Category/Category';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import News from '../../pages/News/News/News';
import Register from '../../pages/Register/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:7000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader:({params})=>fetch(`http://localhost:7000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element: <News></News>,
                loader: ({params})=> fetch(`http://localhost:7000/news/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
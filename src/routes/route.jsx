import React from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from '../layout/layout'
import About from '../../pages/about'
import Contact from '../../pages/contact'
import Cakes from '../../pages/cakes'
import Home from '../../pages/home'
import Cart from '../../pages/cart'
import Login from '../../pages/login'
import Register from '../../pages/register'


export let route=createBrowserRouter([

  {
    element: <Layout/>,
    path: '/',
    children:[
            {
                element:<Home/>,
                index:"true"
            },
            {
              element:<Cakes/>,
              path:"/cakes"
            },
            {
                element:<About/>,
                path:"/about"
            },
            {
                element:<Contact/>,
                path:"/contact"
            },
            {
                element:<Cart/>,
                path:"/cart"
            },
            {
                element:<Login/>,
                path:"/login"
            },
            {
                element:<Register/>,
                path:"/register"
            }
           
        ]

      }
     
    ]
  )









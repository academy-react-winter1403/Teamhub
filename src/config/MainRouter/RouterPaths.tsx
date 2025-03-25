// import React from 'react'

import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import NotFound from "../../components/NotFound/NotFound";
import App from "../../App";
import { Landing } from "../../Pages/Landing";


  export const router= createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        path: '/',
        element: <Landing/>
      },
      {
        path: '/CourseList',
        element: <App/>
      },
      {
        path: '/Blogs',
        element: <App/>
      },
      {
        path: '/CourseDetails',
        element: <App/>
      },
      {
        path: '/News',
        element: <App/>
      },
      {
        path: '/Cart',
        element: <App/>
      },
      {
        path: '/BlogDetails',
        element: <BlogDetails/>
      },

    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
])
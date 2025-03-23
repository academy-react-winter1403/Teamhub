// import React from 'react'

import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import NotFound from "../../components/NotFound/NotFound";
import App from "../../App";
import { Landing } from "../../components/Pages/Landing-Page/Landing";

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
        index: true,
        path: '/CourseList',
        element: <App/>
      },
      {
        index: true,
        path: '/Blogs',
        element: <App/>
      },
      {
        index: true,
        path: '/CourseDetails',
        element: <App/>
      },
      {
        index: true,
        path: '/News',
        element: <App/>
      },
      {
        index: true,
        path: '/Cart',
        element: <App/>
      },

    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
])
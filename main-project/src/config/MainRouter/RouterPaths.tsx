// import React from 'react'

import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import App from "../../App";

  export const router= createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        path: '/',
        element: <App/>
      },

    ]
  }
])
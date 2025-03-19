// import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './RouterPaths'

  
const MainRouter = () => {
    return (
    <RouterProvider router={router}/>

    )
}

export {MainRouter}
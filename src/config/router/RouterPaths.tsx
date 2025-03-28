import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import NotFound from "../../components/NotFound/NotFound";
import App from "../../App";
import { Landing } from "../../Pages/Landing";
import BlogDetails from "../../Pages/BlogDetails";
import { CourseList } from "../../Pages/CourseList";

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
        element: <CourseList/>
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
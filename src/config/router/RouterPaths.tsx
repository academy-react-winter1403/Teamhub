import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/root/Root";
import NotFound from "../../Pages/NotFound";
import App from "../../App";
import { Landing } from "../../Pages/Landing";
import BlogDetails from "../../Pages/BlogDetails";
import { CourseList } from "../../Pages/CourseList";
import CourseDetails from "../../Pages/CourseDetails";
import { Blogs } from "../../Pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
      },
      {
        path: "/CourseList",
        element: <CourseList />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/CourseDetails",
        element: <CourseDetails />,
      },
      {
        path: "/BlogDetails",
        element: <BlogDetails />,
      },
      {
        path: "/News",
        element: <App />,
      },
      {
        path: "/Cart",
        element: <App />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import NotFound from "../../Pages/NotFound";

import Cart from "../../Pages/Cart";
import Login from "../../Pages/login";
import Signup from "../../Pages/signup";
import { Blogs } from "../../Pages/Blogs";
import { Landing } from "../../Pages/Landing";
import BlogDetails from "../../Pages/BlogDetails";
import { CourseList } from "../../Pages/CourseList";
import CourseDetails from "../../Pages/CourseDetails";

import UserRoot from "../UserRoot";
import MyCourses from "../../components/userPanel/ui/MyCourses";
import Dashboard from "../../components/userPanel/ui/Dashboard";
import ProfileEdit from "../../components/userPanel/ui/ProfileEdit";
import MyComments from "../../components/userPanel/ui/MyComments";
import ChangePass from "../../components/userPanel/ui/ChangePass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
    ],
  },
  {
    path: "/UserPanel",
    element: <UserRoot />,
    children: [
      {
        // index: true,
        path: "/UserPanel",
        element: <Dashboard />,
      },
      {
        path: "ProfileEdit",
        element: <ProfileEdit />,
      },
      {
        path: "MyCourses",
        element: <MyCourses />,
      },
      {
        path: "MyComments",
        element: <MyComments />,
      },
      {
        path: "ChangePass",
        element: <ChangePass />,
      },
    ],
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

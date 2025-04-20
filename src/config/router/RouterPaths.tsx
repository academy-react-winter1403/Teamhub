import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import NotFound from "../../pages/NotFound";

import Cart from "../../pages/Cart";

import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import { Blogs } from "../../pages/Blogs";
import { Landing } from "../../pages/Landing";
import BlogDetails from "../../pages/BlogDetails";
import { CourseList } from "../../pages/CourseList";
import CourseDetails from "../../pages/CourseDetails";

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
        path: "/CourseDetails/:id",
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

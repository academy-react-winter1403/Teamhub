import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/root/Root";
import NotFound from "../../Pages/NotFound";
import App from "../../App";
import { Landing } from "../../Pages/Landing";
import BlogDetails from "../../Pages/BlogDetails";
import { CourseList } from "../../Pages/CourseList";
import CourseDetails from "../../Pages/CourseDetails";
import { Blogs } from "../../Pages/Blogs";
// import UserPanel from "../../components/userPanel/UserPanel";
import UserRoot from "../../components/root/UserRoot";
import Dashboard from "../../components/userPanel/ui/Dashboard";
import ProfileEdit from "../../components/userPanel/ui/ProfileEdit";
// import MySaved from "../../components/userPanel/ui/mySaved";
import MyCourses from "../../components/userPanel/ui/MyCourses";
import MyComments from "../../components/userPanel/ui/MyComments";
import ChangePass from "../../components/userPanel/ui/ChangePass";

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
        path: "/Cart",
        element: <App />,
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
    path: "*",
    element: <NotFound />,
  },
]);

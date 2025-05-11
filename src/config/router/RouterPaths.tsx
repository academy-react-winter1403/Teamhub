import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react"; // lazy از react وارد شده

// Root layouts
import Root from "../Root";
import UserRoot from "../UserRoot";

// تعریف کامپوننت‌های Lazy
const Landing = lazy(() =>
  import("../../pages/Landing").then((module) => ({
    default: module.Landing,
  }))
);
const CourseList = lazy(() =>
  import("../../pages/CourseList").then((module) => ({
    default: module.CourseList,
  }))
);
const Blogs = lazy(() =>
  import("../../pages/Blogs").then((module) => ({
    default: module.Blogs,
  }))
);
const CourseDetails = lazy(() => import("../../pages/CourseDetails"));
const BlogDetails = lazy(() => import("../../pages/BlogDetails"));
const Login = lazy(() => import("../../pages/Login"));
const Signup = lazy(() => import("../../pages/Signup"));
const ForgetPassword = lazy(() => import("../../pages/ForgetPassword"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const Dashboard = lazy(() => import("../../components/userPanel/ui/Dashboard"));
const ProfileEdit = lazy(
  () => import("../../components/userPanel/ui/ProfileEdit")
);
const MyCourses = lazy(() => import("../../components/userPanel/ui/MyCourses"));
const MyComments = lazy(
  () => import("../../components/userPanel/ui/MyComments")
);
const Security = lazy(() => import("../../components/userPanel/ui/Security"));
const Reserve = lazy(
  () => import("../../components/userPanel/ui/ReserveCourses")
);
const Myfavorite = lazy(
  () => import("../../components/userPanel/ui/MyFavorites")
);
const Cart = lazy(() => import("../../pages/Cart"));
const About = lazy(() => import("../../pages/About"));

export const router = createBrowserRouter([
  // client
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
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
        path: "/BlogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "ForgetPassword",
        element: <ForgetPassword />,
      },
      // 404 error
      {
        path: "*",
        element: <NotFound />,
      },
      // cart
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
  // user panel
  {
    path: "/UserPanel",
    element: <UserRoot />,
    children: [
      {
        index: true,
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
        path: "Security",
        element: <Security />,
      },
      {
        path: "reserveCourses",
        element: <Reserve />,
      },
      {
        path: "favorite",
        element: <Myfavorite />,
      },
    ],
  },
  // about
  {
    path: "/About",
    element: <About />,
  },
]);

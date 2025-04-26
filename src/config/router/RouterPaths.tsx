import { createBrowserRouter, lazy } from "react-router-dom";

// Root layouts
import Root from "../Root";
import UserRoot from "../UserRoot";
import AdditionalRoot from "../AdditionalRoot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        lazy: async () => {
          const { Landing } = await import("../../pages/Landing");
          return { Component: Landing };
        },
      },
      {
        path: "/CourseList",
        lazy: async () => {
          const { CourseList } = await import("../../pages/CourseList");
          return { Component: CourseList };
        },
      },
      {
        path: "/Blogs",
        lazy: async () => {
          const { Blogs } = await import("../../pages/Blogs");
          return { Component: Blogs };
        },
      },
      {
        path: "/CourseDetails/:id",
        lazy: async () => {
          const { default: CourseDetails } = await import(
            "../../pages/CourseDetails"
          );
          return { Component: CourseDetails };
        },
      },
      {
        path: "/BlogDetails/:id",
        lazy: async () => {
          const { default: BlogDetails } = await import(
            "../../pages/BlogDetails"
          );
          return { Component: BlogDetails };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { default: NotFound } = await import("../../pages/NotFound");
          return { Component: NotFound };
        },
      },
    ],
  },
  {
    path: "/UserPanel",
    element: <UserRoot />,
    children: [
      {
        path: "/UserPanel",
        lazy: async () => {
          const { default: Dashboard } = await import(
            "../../components/userPanel/ui/Dashboard"
          );
          return { Component: Dashboard };
        },
      },
      {
        path: "ProfileEdit",
        lazy: async () => {
          const { default: ProfileEdit } = await import(
            "../../components/userPanel/ui/ProfileEdit"
          );
          return { Component: ProfileEdit };
        },
      },
      {
        path: "MyCourses",
        lazy: async () => {
          const { default: MyCourses } = await import(
            "../../components/userPanel/ui/MyCourses"
          );
          return { Component: MyCourses };
        },
      },
      {
        path: "MyComments",
        lazy: async () => {
          const { default: MyComments } = await import(
            "../../components/userPanel/ui/MyComments"
          );
          return { Component: MyComments };
        },
      },
      {
        path: "ChangePass",
        lazy: async () => {
          const { default: ChangePass } = await import(
            "../../components/userPanel/ui/ChangePass"
          );
          return { Component: ChangePass };
        },
      },
    ],
  },
  {
    path: "/Auth",
    element: <AdditionalRoot />,
    children: [
      {
        path: "Login",
        lazy: async () => {
          const { default: Login } = await import("../../pages/Login");
          return { Component: Login };
        },
      },
      {
        path: "Signup",
        lazy: async () => {
          const { default: Signup } = await import("../../pages/Signup");
          return { Component: Signup };
        },
      },
      {
        path: "ForgetPassword",
        lazy: async () => {
          const { default: ForgetPassword } = await import(
            "../../pages/ForgetPassword"
          );
          return { Component: ForgetPassword };
        },
      },
    ],
  },
  {
    path: "/Cart",
    lazy: async () => {
      const { default: Cart } = await import("../../pages/Cart");
      return { Component: Cart };
    },
  },
  {
    path: "/About",
    lazy: async () => {
      const { default: About } = await import("../../pages/About");
      return { Component: About };
    },
  },
]);

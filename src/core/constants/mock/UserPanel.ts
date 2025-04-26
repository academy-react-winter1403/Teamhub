export interface userPanelPage {
  title: string;
  path: string;
  onClick?: () => void;
}

export const PanelMockData: userPanelPage[] = [
  { title: "داشبورد", path: "/UserPanel/" },
  { title: "دوره های من", path: "/UserPanel/MyCourses" },
  { title: "ذخیره شده", path: "/UserPanel/mysaved" },
  { title: "تغییر رمز عبور", path: "/UserPanel/ChangePass" },
  { title: "نظرات ثبت شده", path: "/UserPanel/MyComments" },
  { title: "ویرایش پروفایل", path: "/UserPanel/ProfileEdit" },
  {
    title: "خروج از حساب",
    path: "",
    onClick: () => {
      console.log("خروج از حساب انجام شد!");
      localStorage.removeItem("token");
      window.location.href = "/login";
    },
  },
];

import HeaderLogo from "../layouts/header/HeaderLogo";

interface CustomNavbarProps {
  title: string;
}

const CustomNavbar = ({ title }: CustomNavbarProps) => {
  console.log("title:", title);
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl flex justify-between px-5">
      <h2 className="font-bold text-3xl">{title}</h2>
      <HeaderLogo />
    </div>
  );
};

export default CustomNavbar;

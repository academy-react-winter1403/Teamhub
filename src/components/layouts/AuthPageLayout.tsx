import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import HeaderLogoDark from "./header/HeaderLogoDark";
import {
  Css,
  Html5,
  ReactIcon,
  Vue,
} from "../../assets/icons/landing/BannerIcons";

const AuthPageLayout = () => {
  return (
    <div className="rounded-r-3xl w-1/2 h-full bg-gray-800 text-white flex flex-col items-center justify-around">
      <HeaderLogoDark />
      <div className=" w-3/5 h-3/5 flex flex-col justify-evenly">
        <Css />
        <Html5 />
        <ReactIcon />
        <Vue />
      </div>
      <div className="flex gap-4">
        <a
          href="#"
          className="p-2 rounded-full bg-[#b9b9ba] hover:bg-[#2a2e4a] transition-colors"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          className="p-2 rounded-full bg-[#b9b9ba] hover:bg-[#2a2e4a] transition-colors"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          className="p-2 rounded-full bg-[#b9b9ba] hover:bg-[#2a2e4a] transition-colors"
        >
          <Facebook size={20} />
        </a>
        <a
          href="#"
          className="p-2 rounded-full bg-[#b9b9ba] hover:bg-[#2a2e4a] transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default AuthPageLayout;

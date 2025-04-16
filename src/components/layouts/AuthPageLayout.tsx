import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import HeaderLogo from "./header/HeaderLogo";

const AuthPageLayout = () => {
  return (
    <div className="rounded-r-3xl w-1/2 h-full bg-gray-800 text-white flex flex-col items-center justify-around">
      <HeaderLogo />
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

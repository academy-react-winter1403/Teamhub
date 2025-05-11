import AvatarSection from "./AvatarSection";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import ProfileSection from "./ProfileSection";

const Drawer = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-full bg-gradient-to-b from-violet-400 to-violet-600 text-white p-4 rounded-3xl md:rounded-3xl">
        <div className="flex flex-col items-center gap-4">
          {/* logo section */}
          <LogoSection />
          {/* avatar section */}
          <AvatarSection />
          {/* profile section */}
          <ProfileSection />
          {/* menu section */}
          <MenuSection />
        </div>
      </aside>
    </>
  );
};

export default Drawer;

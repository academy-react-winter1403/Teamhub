const SideProfile = () => {
  return (
    <div className="h-full w-full flex items-center gap-x-3">
      <div className="avatar flex flex-row w-1/4 justify-evenly">
        <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="text-justify ">
        <h3 className=" font-bold">نام</h3>
        <span className="font-light">شماره موبایل</span>
      </div>
    </div>
  );
};

export default SideProfile;

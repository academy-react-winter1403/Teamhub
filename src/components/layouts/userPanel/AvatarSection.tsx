const AvatarSection = () => {
  return (
    <div
      className="radial-progress"
      style={
        {
          "--value": "75",
          "--size": "7rem",
          "--thickness": "5px",
        } as React.CSSProperties
      }
      aria-valuenow={70}
      role="progressbar"
    >
      <div className="avatar avatar-placeholder">
        <div className="w-24 rounded-full ">
          {/* {avatar.lenght == null ? (<span className="text-xl">AI</span>):(<img src={avatarProps}/>)} */}
          <span className="text-xl">ممد</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarSection;

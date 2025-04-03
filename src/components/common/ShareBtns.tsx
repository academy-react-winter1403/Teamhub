import shareText from "./../../assets/images/title.svg";
import igIcon from "./../../assets/images/igIcon.svg";
import xIcon from "./../../assets/images/xIcon.svg";
import fIcon from "./../../assets/images/fIcon.svg";
const ShareComp = () => {
  return (
    <>
      <div className="h-[64px] w-[842px] bg-base-300 rounded-2xl flex  mx-auto items-center justify-between mb-10 px-5">
        <div className="w-[103px] h-[25px] ">
          <img src={shareText} alt="not found" />
        </div>
        <div className="w-[128px] h-[32px] flex gap-3 ">
          <img src={fIcon} alt="not found" />
          <img src={xIcon} alt="not found" />
          <img src={igIcon} alt="not found" />
        </div>
      </div>
    </>
  );
};

export default ShareComp;

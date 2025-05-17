import ChangePass from "./ChangePass";
import RecoveryMail from "./RecoveryMail";
import TwoStepAuth from "./TwoStepAuth";

const Security = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-1.5">
        {/* title */}
        <div className="divider divider-neutral  text-xl ">تنظیمات امنیتی</div>
        {/* change pass */}
        <div className=" collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            <div className="divider divider-start my-2">تغییر رمز عبور</div>
          </div>
          <div className="collapse-content text-sm flex justify-evenly">
            <ChangePass />
          </div>
        </div>
        {/* 2 step */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className=" collapse-title font-semibold">
            <div className="divider divider-start my-2">ورود دو مرحله‌ای</div>
          </div>
          <div className="collapse-content text-sm">
            <TwoStepAuth />
          </div>
        </div>
        {/* backup mail */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="  collapse-title font-semibold">
            <div className="divider divider-start my-2">ایمیل بازیابی</div>
          </div>
          <div className="collapse-content text-sm ">
            <RecoveryMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;

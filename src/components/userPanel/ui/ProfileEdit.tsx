import { useState } from "react";
import ProfileImageUploader from "./ProfileImageUploader";

const ProfileEdit = () => {
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [telegram, setTelegram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      {/* title */}
      <div className="divider divider-neutral text-xl ">ویرایش پروفایل</div>
      <div className="grid grid-cols-3 gap-6">
        {/* عکس */}
        <div className="md:col-span-3">
          <ProfileImageUploader />
        </div>
        {/* نام */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            نام
          </label>
          <input
            type="text"
            placeholder="مثلاً: بیتا"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* نام خانوادگی */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            نام خانوادگی
          </label>
          <input
            type="text"
            placeholder="مثلاً: قنبری"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* کد ملی */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            کد ملی
          </label>
          <input
            type="text"
            placeholder="مثلاً: 1234567890"
            value={nationalCode}
            onChange={(e) => setNationalCode(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* تاریخ تولد */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            تاریخ تولد
          </label>
          <input
            type="text"
            placeholder="مثلاً: 1400/01/01"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* شماره موبایل */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            شماره موبایل
          </label>
          <input
            type="text"
            placeholder="مثلاً: 09121234567"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* ایمیل */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ایمیل
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* جنسیت */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            جنسیت
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option className="" value="">
              انتخاب کنید
            </option>
            <option className="" value="male">
              مرد
            </option>
            <option className="" value="female">
              زن
            </option>
            {/* <option value="other">سایر</option> */}
          </select>
        </div>

        {/* تلگرام */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            تلگرام
          </label>
          <input
            type="text"
            placeholder="https://t.me/username"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* لینکدین */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            لینکدین
          </label>
          <input
            type="text"
            placeholder="https://linkedin.com/in/username"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* درباره من */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            درباره من
          </label>
          <textarea
            rows={4}
            placeholder="چیزی درباره‌ی خودتان بنویسید..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* آدرس */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            آدرس
          </label>
          <textarea
            rows={2}
            placeholder="مثال: تهران، میدان آزادی، کوچه فلان، پلاک ۱۲"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-2 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* نقشه (شبیه‌سازی شده) */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            نقشه
          </label>
          <div className="w-full h-52 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-sm">
            جای نقشه
          </div>
        </div>

        <button className="md:col-span-1 bg-[#3f3fe1] btn btn-active text-white py-6 rounded-lg">
          ثبت اطلاعات
        </button>

        <button className="md:col-span-1 btn btn-outline btn-error rounded-lg py-6">
          لغو
        </button>
      </div>
    </>
  );
};

export default ProfileEdit;

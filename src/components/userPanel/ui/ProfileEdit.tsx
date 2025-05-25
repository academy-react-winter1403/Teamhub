import { useState, useEffect } from "react";
import ProfileImageUploader from "./ProfileImageUploader";
import { useProfileQuery } from "../../../core/hooks/query/useProfileQuery";
import { useUpdateProfileMutation } from "../../../core/hooks/query/useUpdateProfileMutation";
import persianDate from "persian-date";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const { data: profile, isLoading } = useProfileQuery();
  const { mutate: updateProfile, isLoading: isUpdating } =
    useUpdateProfileMutation();

  useEffect(() => {
    if (profile) {
      setFirstName(profile.fName || "");
      setLastName(profile.lName || "");
      setNationalCode(profile.nationalCode || "");
      if (profile.birthDay && profile.birthDay !== "0001-01-01T00:00:00") {
        const date = new persianDate(new Date(profile.birthDay));
        setBirthDate(date.format("YYYY/MM/DD"));
        setYear(date.format("YYYY"));
        setMonth(date.format("MM"));
        setDay(date.format("DD"));
      } else {
        setBirthDate("");
        setYear("");
        setMonth("");
        setDay("");
      }
      setMobile(profile.phoneNumber || "");
      setEmail(profile.email || "");
      setGender(profile.gender ? "male" : "female");
      setTelegram(profile.telegramLink || "");
      setLinkedin(profile.linkdinProfile || "");
      setAbout(profile.userAbout || "");
      setAddress(profile.homeAdderess || "");
    }
  }, [profile]);

  const handleSubmit = () => {
    const updatedProfile = {
      fName: firstName || null,
      lName: lastName || null,
      nationalCode: nationalCode || null,
      birthDay: birthDate
        ? new persianDate([parseInt(year), parseInt(month), parseInt(day)])
            .toDate()
            .toISOString()
        : "0001-01-01T00:00:00",
      phoneNumber: mobile || null,
      email: email || null,
      gender: gender === "male",
      telegramLink: telegram || null,
      linkdinProfile: linkedin || null,
      userAbout: about || null,
      homeAdderess: address || null,
    };
    updateProfile(updatedProfile);
  };

  const handleDateConfirm = () => {
    if (year && month && day) {
      const date = new persianDate([
        parseInt(year),
        parseInt(month),
        parseInt(day),
      ]);
      setBirthDate(date.format("YYYY/MM/DD"));
    } else {
      setBirthDate("");
    }
    setIsModalOpen(false);
  };

  const inputClass = (value: string) =>
    `w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary ${
      value ? "text-black" : ""
    }`;

  return (
    <>
      <div className="divider divider-neutral text-xl">ویرایش پروفایل</div>
      {isLoading ? (
        <div className="text-center">در حال بارگذاری...</div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          <div className="md:col-span-3">
            <ProfileImageUploader />
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              نام
            </label>
            <input
              type="text"
              placeholder="مثلاً: بیتا"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass(firstName)}
            />
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              نام خانوادگی
            </label>
            <input
              type="text"
              placeholder="مثلاً: قنبری"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClass(lastName)}
            />
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              کد ملی
            </label>
            <input
              type="text"
              placeholder="مثلاً: 1234567890"
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
              className={inputClass(nationalCode)}
            />
          </div>
          {/* تاریخ تولد */}
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              تاریخ تولد
            </label>
            <label
              htmlFor="date-modal"
              className="input input-bordered rounded-xl w-full text-black cursor-pointer"
            >
              {birthDate || "نامشخص"}
            </label>
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              شماره موبایل
            </label>
            <input
              type="text"
              placeholder="مثلاً: 09121234567"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className={inputClass(mobile)}
            />
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              ایمیل
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass(email)}
            />
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              جنسیت
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={inputClass(gender)}
            >
              <option value="">انتخاب کنید</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              تلگرام
            </label>
            <input
              type="text"
              placeholder="https://t.me/username"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              className={inputClass(telegram)}
            />
          </div>
          <div>
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              لینکدین
            </label>
            <input
              type="text"
              placeholder="https://linkedin.com/in/username"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className={inputClass(linkedin)}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              درباره من
            </label>
            <textarea
              rows={4}
              placeholder="چیزی درباره‌ی خودتان بنویسید..."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className={inputClass(about)}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              آدرس
            </label>
            <textarea
              rows={2}
              placeholder="مثال: تهران، میدان آزادی، کوچه فلان، پلاک ۱۲"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={inputClass(address)}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-start indent-4 text-sm font-medium text-gray-700 mb-1">
              نقشه
            </label>
            <div className="w-full h-52 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-sm">
              جای نقشه
            </div>
          </div>
          {/* مودال تاریخ */}
          <input
            type="checkbox"
            id="date-modal"
            className="modal-toggle"
            checked={isModalOpen}
            onChange={() => setIsModalOpen(!isModalOpen)}
          />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="font-bold text-lg">انتخاب تاریخ تولد</h3>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    سال
                  </label>
                  <input
                    type="text"
                    placeholder="مثلاً: 1400"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className={inputClass(year)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ماه
                  </label>
                  <input
                    type="text"
                    placeholder="مثلاً: 01"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className={inputClass(month)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    روز
                  </label>
                  <input
                    type="text"
                    placeholder="مثلاً: 01"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className={inputClass(day)}
                  />
                </div>
              </div>
              <div className="modal-action">
                <button
                  className="btn bg-[#3f3fe1] text-white"
                  onClick={handleDateConfirm}
                >
                  تأیید
                </button>
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => setIsModalOpen(false)}
                >
                  لغو
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-1/3 flex  gap-4">
        <button
          className="w-2/3 bg-[#3f3fe1] btn btn-active text-white py-6 rounded-lg disabled:opacity-50"
          onClick={handleSubmit}
          disabled={isUpdating}
        >
          {isUpdating ? "در حال ثبت..." : "ثبت اطلاعات"}
        </button>
        <button className="w-1/4 btn btn-outline btn-error rounded-lg py-6">
          لغو
        </button>
      </div>
    </>
  );
};

export default ProfileEdit;

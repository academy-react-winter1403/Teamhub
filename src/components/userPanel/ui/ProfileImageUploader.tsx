import { useRef, useState } from "react";
import { CameraIcon } from "lucide-react";
import mmdzmn from "../../../assets/images/mmdzmn.jpg";

const ProfileImageUploader = () => {
  const [preview, setPreview] = useState(mmdzmn); // تصویر پیش‌فرض
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg cursor-pointer group"
        onClick={openFilePicker}
      >
        <img
          src={preview}
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <CameraIcon className="w-8 h-8 text-white" />
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          onChange={handleImageChange}
        />
      </div>
      <span className="text-sm text-gray-600">ویرایش تصویر</span>
    </div>
  );
};

export default ProfileImageUploader;

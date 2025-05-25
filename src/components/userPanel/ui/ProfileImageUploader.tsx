import { useState, useRef, useEffect } from "react";
import { CameraIcon, Trash, Star } from "lucide-react";
import { useProfileQuery } from "../../../core/hooks/query/useProfileQuery";
import { useDeleteProfileImageMutation } from "../../../core/hooks/query/useDeleteProfileImageMutation";
import { useSelectProfileImageMutation } from "../../../core/hooks/query/useSelectProfileImageMutation";
import { useAddProfileImageMutation } from "../../../core/hooks/query/useAddProfileImageMutation";
import { useQueryClient } from "@tanstack/react-query";

const ProfileImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const { data: profile, isLoading, error, refetch } = useProfileQuery();
  const { mutate: deleteImage, isLoading: isDeleting } =
    useDeleteProfileImageMutation();
  const { mutate: selectImage, isLoading: isSelecting } =
    useSelectProfileImageMutation();
  const { mutate: addImage, isLoading: isUploading } =
    useAddProfileImageMutation();

  const openModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    modal.showModal();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // اعتبارسنجی فایل
      if (!file.type.startsWith("image/")) {
        setErrorMessage("لطفاً یک فایل تصویری انتخاب کنید.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("حجم فایل باید کمتر از ۵ مگابایت باشد.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      addImage(formData, {
        onSuccess: () => {
          setSuccessMessage("عکس با موفقیت آپلود شد.");
          setSelectedFile(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
        },
        onError: (error) => {
          setErrorMessage(
            "خطا در آپلود عکس: " +
              (error.message || "لطفاً دوباره امتحان کنید.")
          );
        },
      });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (!profile && !isLoading && !error) {
      refetch();
    }
  }, [refetch, profile, isLoading, error]);

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div>خطا: {(error as Error).message}</div>;
  }

  if (!profile) {
    return <div>اطلاعات پروفایل یافت نشد</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4" dir="rtl">
      <div
        className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg cursor-pointer group"
        onClick={openModal}
      >
        <img
          src={
            profile.currentPictureAddress || "https://via.placeholder.com/150"
          }
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <CameraIcon className="w-8 h-8 text-white" />
        </div>
      </div>
      <span className="text-sm text-base-content">ویرایش تصویر</span>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">مدیریت تصاویر پروفایل</h3>
          <div className="flex flex-col gap-4 mt-4">
            <button
              className="btn btn-primary"
              onClick={handleUploadClick}
              disabled={isUploading}
            >
              {isUploading ? "در حال آپلود..." : "آپلود تصویر جدید"}
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            {selectedFile && (
              <button
                className="btn btn-primary"
                onClick={handleUpload}
                disabled={isUploading}
              >
                {isUploading ? "در حال آپلود..." : "تأیید آپلود"}
              </button>
            )}
            {errorMessage && (
              <div className="alert alert-error">
                <span>{errorMessage}</span>
              </div>
            )}
            {successMessage && (
              <div className="alert alert-success">
                <span>{successMessage}</span>
              </div>
            )}
            <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
              {profile.userImage.length > 0 ? (
                profile.userImage.map((image) => (
                  <div
                    key={image.id}
                    className="relative w-full h-24 rounded-lg overflow-hidden group"
                  >
                    <img
                      src={image.puctureAddress}
                      alt={image.pictureName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        className="btn btn-circle btn-sm bg-error text-white"
                        onClick={() =>
                          deleteImage(image.id, {
                            onSuccess: () =>
                              queryClient.invalidateQueries({
                                queryKey: ["profile"],
                              }),
                          })
                        }
                        disabled={isDeleting || isSelecting}
                        title="حذف عکس"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                      <button
                        className="btn btn-circle btn-sm bg-warning text-white"
                        onClick={() =>
                          selectImage(image.id, {
                            onSuccess: () =>
                              queryClient.invalidateQueries({
                                queryKey: ["profile"],
                              }),
                          })
                        }
                        disabled={
                          isDeleting ||
                          isSelecting ||
                          image.puctureAddress === profile.currentPictureAddress
                        }
                        title="تنظیم به‌عنوان پیش‌فرض"
                      >
                        <Star className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-base-content col-span-3 text-center">
                  هیچ تصویری وجود ندارد
                </p>
              )}
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ProfileImageUploader;

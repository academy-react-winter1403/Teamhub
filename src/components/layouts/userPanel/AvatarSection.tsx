import { useProfileQuery } from "../../../core/hooks/query/useProfileQuery";
import { useEffect } from "react";
const AvatarSection = () => {
  const { data: profile, isLoading, error, refetch } = useProfileQuery();

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
          {profile.currentPictureAddress.length == null ? (
            <span className="text-xl">AI</span>
          ) : (
            <img src={profile.currentPictureAddress} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AvatarSection;

interface TeacherCardProps {
  name: string;
  imageSrc: string;
  courses: number;
  news?: number;
  onClick: () => void;
}

const TeacherCard = ({
  name,
  imageSrc,
  courses,
  news,
  onClick,
}: TeacherCardProps) => {
  return (
    <div
      className="w-[296px] h-[90%]shadow-md rounded-3xl flex flex-col justify-between text-center relative cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageSrc}
        alt={name ? `تصویر ${name}` : "تصویر استاد"}
        className="w-full h-[75%] rounded-3xl object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800">
        {name || "نام استاد"}
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        مقالات: {news !== undefined ? news : 0}
      </p>
      <span className="w-[88px] h-[36px] bg-white absolute top-3 right-3 rounded-2xl p-2 text-[#2196F3] text-sm font-medium shadow-sm">
        دوره‌ها: {courses || 0}
      </span>
    </div>
  );
};

export default TeacherCard;

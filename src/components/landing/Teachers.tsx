import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TeacherCard from "../cards/landing/ui/Teachers";
import TeacherModal from "../modals/teachers/TeacherModal";
import { getTeachers } from "../../core/services/api/landingApi/Teachers";

interface Teacher {
  name: string;
  fullName: string;
  pictureAddress: string;
  courseCounts: number;
  newsCount?: number;
}

const TeachersSection = () => {
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      try {
        const response = await getTeachers();
        // console.log("Teachers API Response:", response);
        const data = response.data || [];
        // console.log("Teachers Data:", data);
        setTeachers(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error: any) {
        console.error(
          "Teachers API Error:",
          error.response?.data || error.message
        );
        setError("خطایی در دریافت داده‌های اساتید رخ داد!");
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  const openModal = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    const modal = document.getElementById(
      "teacher_modal"
    ) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  };

  if (loading)
    return <div className="text-center py-10">در حال بارگذاری...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">{error}</div>;

  const teachersWithPicture = teachers.filter(
    (teacher) => teacher.pictureAddress && teacher.pictureAddress.trim() !== ""
  );
  // console.log("Teachers with Picture:", teachersWithPicture);

  if (teachersWithPicture.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600">
        هیچ استادی با تصویر یافت نشد.
      </div>
    );
  }

  return (
    <div
      id="teachers"
      className="w-full min-h-[648px] py-10 flex flex-col justify-evenly"
    >
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 relative">
          <span className="relative z-10">اساتید برتر</span>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 via-blue-400 to-gray-100 transform -translate-y-2 -mb-4"></span>
        </h2>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-11/12 mx-auto h-[500px]"
      >
        {teachersWithPicture.map((teacher, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex justify-center ${
                index % 2 === 0 ? "mt-0" : "mt-12"
              }`}
            >
              <TeacherCard
                name={teacher.fullName}
                imageSrc={teacher.pictureAddress}
                courses={teacher.courseCounts}
                news={teacher.newsCount}
                onClick={() => openModal(teacher)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TeacherModal selectedTeacher={selectedTeacher} />
    </div>
  );
};

export default TeachersSection;

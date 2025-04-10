import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { teachers } from "../../core/constants/mock/TeachersMockData.tsx";
import TeacherCard from "../cards/landing/ui/Teachers.tsx";

const Slider: React.FC = () => {
  return (
    <div id="teachers" className="w-full py-10 bg-blue-50">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        اساتید برتر
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-4/5 mx-auto"
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <TeacherCard teacher={teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

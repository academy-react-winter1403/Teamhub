import React from "react";
import { Teacher } from "../../../../core/constants/Types";

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  return (
    <div className="bg-white shadow-md p-5 rounded-lg text-center">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="rounded-full w-32 h-32 mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold">{teacher.name}</h3>
      <p className="text-gray-600">{teacher.field}</p>
    </div>
  );
};

export default TeacherCard;

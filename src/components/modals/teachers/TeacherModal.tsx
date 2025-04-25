interface Teacher {
  name: string;
  fullName: string;
  pictureAddress: string;
  courseCounts: number;
  newsCount?: number;
}

interface TeacherModalProps {
  selectedTeacher: Teacher | null;
}

const TeacherModal = ({ selectedTeacher }: TeacherModalProps) => {
  return (
    <dialog id="teacher_modal" className="modal">
      <div className="modal-box bg-white p-6 rounded-2xl max-w-md">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {selectedTeacher ? (
          <>
            <div className="flex justify-center mb-4">
              <img
                src={selectedTeacher.pictureAddress}
                alt={`تصویر ${selectedTeacher.fullName}`}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-center text-gray-800">
              {selectedTeacher.fullName || "نام استاد"}
            </h3>
            <p className="py-2 text-gray-600 text-center">
              تعداد دوره‌ها: {selectedTeacher.courseCounts || 0}
            </p>
            <p className="py-2 text-gray-600 text-center">
              مقالات:{" "}
              {selectedTeacher.newsCount !== undefined
                ? selectedTeacher.newsCount
                : 0}
            </p>
          </>
        ) : (
          <div className="text-center py-4 text-gray-600">
            اطلاعاتی برای نمایش وجود ندارد.
          </div>
        )}
      </div>
    </dialog>
  );
};

export default TeacherModal;

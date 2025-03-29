import Comment from "../comment/Comment";
import Description from "./Description";
import LessonList from "./LessonList";

const CourseTabs = () => {
  return (
    <div className="w-4/6 bg-white rounded-2xl">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="توضیحات"
        />
        <div className="tab-content border-base-300 bg-base-100 p-4">
          <Description />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="پیش‌نمایش ها"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-4">
          <LessonList />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="نظرات کاربران"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default CourseTabs;

import Comment from "../../common/Comment";
import Description from "./Description";

const CourseTabs = ({describe}: any) => {
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
        <div className="tab-content border-base-300 bg-base-100 p-4 mb-10 rounded-2xl">
          <Description 
          describe= {describe}
          />
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="نظرات کاربران"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-7 mb-20 shadow rounded-2xl">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default CourseTabs;

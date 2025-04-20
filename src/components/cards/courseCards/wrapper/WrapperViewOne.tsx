import { CourseState } from "../../../../core/constants/Types";
import { CardViewOne } from "../CardViewOne"


const WrapperViewOne = ({cardList}: {cardList: CourseState[]}) => {

  return (
    <div className="courseCards w-full flex flex-wrap justify-between gap-5">
      {cardList.map((item, index)=>(

          <CardViewOne
          key={index} 
          title={item.title}
          teacherName={item.teacherName}
          cost={item.cost}
          courseId={item.courseId}
          describe={""}
          tumbImageAddress={item.tumbImageAddress}
          />

      ))}
    </div>
  );
};

export { WrapperViewOne };

import { CourseState2 } from "../../../../core/constants/Types"
import { CardViewOne } from "../CardViewOne"


const WrapperViewOne = ({cardList}: {cardList: CourseState2[]}) => {

  return (
    <div className="courseCards w-full flex flex-wrap justify-between gap-5">
      {cardList.map((item, index)=>(

          <CardViewOne
          key={index} 
          title={item.title}
          teacherName={item.teacherName}
          cost={item.cost}
          />

      ))}
    </div>
  );
};

export { WrapperViewOne };

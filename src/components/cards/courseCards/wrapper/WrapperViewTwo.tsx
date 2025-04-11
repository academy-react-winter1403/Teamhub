import { CourseState } from "../../../../core/constants/Types"
import { CardViewTwo } from "../CardViewTwo"


const WrapperViewTwo = ({cardList}: {cardList: CourseState[]}) => {
  return (
    <div>
      {cardList.map((item, index) => 
        <CardViewTwo
        key={index} 
        title={item.title}
        teacherName={item.teacherName}
        cost={item.cost}
        describe={item.describe}
        />
      )}


    </div>
  )
}

export {WrapperViewTwo}
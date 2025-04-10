import { useEffect, useState } from "react"
import { CardViewOne } from "../CardViewOne"
import { getCourseList } from "../../../../core/services/api/CourseList"


const WrapperViewOne = () => {
  interface Course{
    title: string
  }
  const [courseList, setCourseList] = useState<Course[]>([])

  const getCouseData= async() => {
    const response = await getCourseList()
    const dataArray= Object.values(response)
    setCourseList(dataArray[0] as Course[])
    console.log(dataArray[0])
  }

  useEffect(() => {
    getCouseData()
  }, [])
  

  return (
    <div className="courseCards w-full flex flex-wrap justify-between gap-2">
      {courseList.map((item, index)=>(

          <CardViewOne 
          key={index} 
          title={item.title}
          />
      ))}

    </div>  
  )
}

export {WrapperViewOne}
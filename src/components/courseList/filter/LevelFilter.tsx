import { useEffect, useState } from "react";
import http from "../../../core/services/interceptor"
const URL= import.meta.env.VITE_API_BASE_URL
import { CourseState } from "../../../core/constants/Types";
interface categoy{
    levelName: string
}
interface CategoryFilterProps {
  allCourses: any[];
  setCardList: (courses: CourseState[]) => void
}

const LevelFilter = ({allCourses, setCardList}: CategoryFilterProps) => {
    const [levels, setLevels] = useState<categoy[]>([])
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

    const getCategoryData= async()=>{
        const result= await http.get(URL+ "/CourseLevel/GetAllCourseLevel")
        const ObjArray= Object.values(result.data as categoy)
        setLevels(ObjArray)
    }
    useEffect(() => {
        getCategoryData()
    }, [])

    const handleLevelFilter = (techName: string, isChecked: boolean) => {
        setSelectedLevels(prev => {
          const updatedLevel = isChecked
            ? [...prev, techName]
            : prev.filter(name => name !== techName);
          return updatedLevel;
        });
    };
    useEffect(() => {
        if (selectedLevels.length === 0) {
          setCardList(allCourses)
        } else {
          const filtered = allCourses.filter(e => {
           return selectedLevels.includes(e.levelName) // فرض بر اینکه course.teacherName وجود دارد
        });
          setCardList(filtered)   
        }
      }, [selectedLevels, allCourses]);

    return (
        <div className="max-h-100 overflow-y-auto">
            {levels.map((item , index)=>(
                <label key={index} className="flex items-center gap-2 cursor-pointer mb-2 border-b border-gray-200 pb-2">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm"
                    onChange={(e)=> {handleLevelFilter(item.levelName , e.target.checked)}}/>
                    <span className="text-sm">{item.levelName}</span>
                </label>
            ))}
        </div>    
    )
}

export {LevelFilter}
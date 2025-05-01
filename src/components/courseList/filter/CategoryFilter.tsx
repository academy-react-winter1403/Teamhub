import { useEffect, useState } from "react";
import http from "../../../core/services/interceptor"
const URL= import.meta.env.VITE_API_BASE_URL

import { CourseState, CourseState2 } from "../../../core/constants/Types";
interface categoy{
    techName: string
}
interface CategoryFilterProps {
  allCourses: any[];
  setCardList: (courses: CourseState[]) => void
}

const CategoryFilter = ({allCourses, setCardList}: CategoryFilterProps) => {
    const [categories, setCategories] = useState<categoy[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // لیست اساتید انتخاب شده
    

    const getCategoryData= async()=>{
        const result= await http.get(URL+ "/Home/GetTechnologies")
        const ObjArray= Object.values(result.data as categoy)
        setCategories(ObjArray)
    }
    useEffect(() => {
        getCategoryData()
    }, [])

    const handleCategoryFilter = (techName: string, isChecked: boolean) => {
        setSelectedCategories(prev => {
          const updatedCategory = isChecked
            ? [...prev, techName]
            : prev.filter(name => name !== techName);
          return updatedCategory;
        });
      };
      useEffect(() => {
        if (selectedCategories.length === 0) {
          setCardList(allCourses)
        } else {
          const filtered = allCourses.filter(e => {
           return selectedCategories.includes(e.technologyList) // فرض بر اینکه course.teacherName وجود دارد
        });
          setCardList(filtered)   

        }
      }, [selectedCategories, allCourses]);
      

  return (
    <div className="max-h-100 overflow-y-auto">
        {categories.map((item , index)=>(
            <label key={index} className="flex items-center gap-2 cursor-pointer mb-2 border-b border-gray-200 pb-2">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-sm"
              onChange={(e)=> {handleCategoryFilter(item.techName , e.target.checked)}}/>
              <span className="text-sm">{item.techName}</span>
            </label>
        ))}
    </div>
  )
}

export {CategoryFilter}
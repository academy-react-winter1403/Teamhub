import { useEffect, useState } from "react"
import http from "../../../core/services/interceptor"
import { CourseState } from "../../../core/constants/Types"
const URL= import.meta.env.VITE_API_BASE_URL
interface teachers{
    fullName: string
}
interface TeacherFilterProps {
  allCourses: CourseState[];
  setCardList: (courses: CourseState[]) => void
}

const TeachersFilter = ({allCourses, setCardList}: TeacherFilterProps) => {
    const [teachers, setTeachers] = useState<teachers[]>([])
    const [originalData, setoriginalData] = useState<teachers[]>([])
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTeachers, setSelectedTeachers] = useState<string[]>([]); // لیست اساتید انتخاب شده

    const getTeacherData= async()=>{
        const result= await http.get(URL+ "/Home/GetTeachers")
        const ObjArray= Object.values(result.data as teachers)
        setTeachers(ObjArray)
        setoriginalData(ObjArray)
    }
    useEffect(() => {
      getTeacherData()
    }, [])

      const handleSearch = (search: string) => {
        setSearchTerm(search);
        if (search === "") {
          // اگر جستجو خالی است، 12 آیتم اول را نمایش بده
          setTeachers(originalData);
        } else {
          // جستجو در تمام داده‌ها
          const filtered = originalData.filter((el) => 
            el?.fullName?.toLowerCase()?.includes(search.toLowerCase())
          );
          setTeachers(filtered);
        }
      };
  
    const handleTeacherFilter = (teacherName: string, isChecked: boolean) => {
      setSelectedTeachers(prev => {
        const updatedTeachers = isChecked
          ? [...prev, teacherName]
          : prev.filter(name => name !== teacherName);
        return updatedTeachers;
      });
    };
    useEffect(() => {
      if (selectedTeachers.length === 0) {
        // اگر هیچ استادی انتخاب نشده، همه دوره‌ها را نمایش بده
        setCardList(allCourses)
      } else {
        // فیلتر کردن دوره‌ها بر اساس اساتید انتخاب شده
        const filtered = allCourses.filter(e => {
         return selectedTeachers.includes(e.teacherName) // فرض بر اینکه course.teacherName وجود دارد
      });
        setCardList(filtered)        
      }
    }, [selectedTeachers, allCourses]);
    
  return (
    <div>
        <div>
          <label className="h-full input outline-none rounded-xl w-full border-0 drop-shadow-md mb-5">
            <input
              type="search"
              className="grow outline-none bg-[url(./search-normal.svg)] bg-no-repeat bg-[size:20px] bg-[center_left_0.75rem]  pl-10 p-3"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </label>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {teachers.map((item , index)=>(
              <label key={index} className="flex items-center gap-2 cursor-pointer mb-2 border-b border-gray-200 pb-2">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm"
                onChange={(e)=> {handleTeacherFilter(item.fullName ? item.fullName : "محمدحسین بحرالعلومی", e.target.checked)}}/>
                <span className="text-sm">{item.fullName ? item.fullName : "محمدحسین بحرالعلومی"}</span>
              </label>
          ))}
        </div>
    </div>
  )
}

export {TeachersFilter}
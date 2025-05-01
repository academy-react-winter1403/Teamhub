import { useEffect, useState } from "react"
import http from "../../../core/services/interceptor"
const URL= import.meta.env.VITE_API_BASE_URL
interface categoy{
    typeName: string
}

const TypeFilter = () => {
    const [types, setTypes] = useState<categoy[]>([])

    const getCategoryData= async()=>{
        const result= await http.get(URL+ "/CourseType/GetCourseTypes")
        const ObjArray= Object.values(result.data as categoy)
        setTypes(ObjArray)
    }
    useEffect(() => {
        getCategoryData()
    }, [])

  return (
    <div className="max-h-50 overflow-y-auto">
        {types.map((item , index)=>(
            <label key={index} className="flex items-center gap-2 cursor-pointer mb-2 border-b border-gray-200 pb-2">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
              <span className="text-sm">{item.typeName}</span>
            </label>
        ))}
    </div>  )
}

export {TypeFilter}
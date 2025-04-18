import http from "../interceptor"
const URL= import.meta.env.VITE_API_BASE_URL

export const getCourseList = async () => {
    try{
        const result= await http.get(URL + "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=Active&SortType=DESC&TechCount=0")
        return result.data
    } catch (error){
        console.log(error)
        return[]
    }
}
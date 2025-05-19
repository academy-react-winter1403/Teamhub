import heartIcon from "./../../../assets/images/heartIcon.svg";
import messagesIcon from "./../../../assets/images/messagesIcon.svg";
import http from "../../../core/services/interceptor"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface replyProps{
    // id:string
    commentId: string
}
interface replyItems{
    pictureAddress: string
    title: string
    describe: string
    insertDate: string
    likeCount: string
    author: string
}

const ReplyComment = ({commentId}: replyProps) => {
    const [replys, setReplys] = useState<replyItems[]>([])
    const [newReply, setnewReply] = useState('')
    const { id } = useParams();

    const getReply= async(courseId: string, commentId: string) => {
        const response= await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${commentId}`)
        // const ObjArray= Object.values(response)
        return response.data
    }
    const fetchCommentReply= async(id: string, commentId: string) => {
        const response= await getReply(id, commentId)
        setReplys(response)
        // console.log(response)
    }
    useEffect(() => {
        if(id){
            fetchCommentReply(id, commentId)
        }
    }, [id])
    //add reply comment
    const handleSubmitReply = async() => {

        const response= await http.post("/Course/AddReplyCourseComment",
            {
                commentId,
                courseId: id,
                title: "title",
                describe: newReply
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
        setReplys([...replys, response.data])
        setnewReply('')
        // console.log("add rply--", response.data)
    }

  return (
    <div className="relative">
        <input type="text" 
        className="w-[70%] h-5 text-sm border-r border-b border-gray-300 rounded-md p-3 outline-none absolute -top-10 right-30"
        placeholder="نظر خودتو بنویس..." 
        value={newReply}
        onChange={(e) => setnewReply(e.target.value)}
        />
        <button className="btn h-8 bg-blue-500 text-white text-xs rounded-xl absolute -top-10 left-10"
            onClick={handleSubmitReply}>ارسال</button>
        {replys.map((item, index)=> (
            <div key={index} className="border-r-1 border-b-1 border-gray-300 rounded-xl w-[85%] mr-30 p-2 mb-2">
                <div className="flex justify-between items-center w-full  h-10 mb-3">
                    <div className="flex items-center h-full">
                        <img src={item.pictureAddress} 
                        className="border border-ref-600 w-10 h-full rounded-full bg-black" 
                        alt="not found" 
                        />
                        <p className="font-semibold pr-2">{item.author}</p>
                    </div>
                    <p className="text-xs">{item.insertDate}</p>
                </div>
                <p className="text-right text-sm text-gray-700 mb-3">{item.describe}</p>
                <div className="flex border-blue-600 ">
                    <div className="flex h-5 mr-1">
                        <p className=" text-red-500">{item.likeCount}</p>
                        <img className=" h-[18px] mr-1" src={heartIcon} alt="not found" />
                    </div>
                    <div className="flex justify-between h-5 mr-4">
                        {/* <p className="text-sm text-gray-700 ml-1">پاسخ</p> */}
                        <img className=" h-[18px]" src={messagesIcon} alt="not found" />
                    </div>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default ReplyComment
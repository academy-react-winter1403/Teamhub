import heartIcon from "./../../../assets/images/heartIcon.svg";
import messagesIcon from "./../../../assets/images/messagesIcon.svg";
import http from "../../../core/services/interceptor"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getItemLocalStorage } from "../../../core/hooks/localStorage/getItem";
// import { useParams } from "react-router-dom";

interface replyItems{
    pictureAddress: string
    title: string
    describe: string
    inserDate: string
    likeCount: string
    author: string
    parentId: number
}

const ReplyCmntBlog = ({commentId}: any) => {
    const [replys, setReplys] = useState<replyItems[]>([])
    const [newReply, setnewReply] = useState('')
    const { id } = useParams();

    const getReply= async() => {
        const response= await http.get(`/News/GetRepliesComments?Id=${commentId}`)
        return response
    }
    const fetchCommentReply= async() => {
        const response= await getReply()
        const ObjArray= Object.values(response)
        setReplys(ObjArray[0])
        // console.log("blog comment reply:  ",ObjArray[0])
    }
    useEffect(() => {
            fetchCommentReply()
    }, [])

    //add reply comment
    const handleSubmitReply = async() => {
        const userIpAddress = await getUserIp();
        const userId = getItemLocalStorage("userId")

        const response= await http.post("/News/CreateNewsReplyComment",
            {
                newsId: id,
                userIpAddress,
                title: "title",
                describe: newReply,
                userId: Number(userId),
                parentId: commentId
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
        setReplys([...replys, response.data])
        setnewReply('')
        // console.log("add rply--", response.data)
    }

      //getting IP Adress
    const getUserIp = async () => {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            return response.data.ip;
        } catch (error) {
            console.error("خطا در دریافت IP کاربر:", error);
            return null;
        }
    };
  return (
    <div className="relative mt-4 mr-3">
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
                        <p className="font-semibold pr-2">{item.author? item.author: item.title}</p>
                    </div>
                    <p className="text-xs">{item.inserDate}</p>
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

export default ReplyCmntBlog
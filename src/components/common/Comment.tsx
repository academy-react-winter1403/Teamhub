// import blogAvatarImg from "./../../assets/images/blogAvatarImg.png";
import messagesIcon from "./../../assets/images/messagesIcon.svg";
import heartIcon from "./../../assets/images/heartIcon.svg";
import http from "../../core/services/interceptor"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getItemLocalStorage } from "../../core/hooks/localStorage/getItem";
import ReplyComment from "../courseDetails/ui/ReplyComment";
interface Comment {
  // Define your comment interface here
  id: string;
  text: string;
  title: string
  describe:string
  pictureAddress: string
  likeCount:number
  insertDate: string
  author: string
  // ... other properties
}

function Comment() {
    const [cmnt, setcmnt] = useState<Comment[]>([])
    const [newComment, setnewComment] = useState('')
    // const [title, setTitle] = useState('')
    const { id } = useParams();

  const getComment= async(courseId: string) => {
    const response= await http.get(`/Course/GetCourseCommnets/${courseId}`)
    // const ObjArray= Object.values(response)
    return response.data
  }

  const fetchCourseComment = async(id: string) => {
    const response= await getComment(id)
    setcmnt(response)
    // console.log("comments: ", response)
  }
  useEffect(() => {
    if(id){
    fetchCourseComment(id)
    }
  }, [id])
  //add commentsssss
  const handleSubmitComment = async() => {
    const userIpAddress = await getUserIp();
    const userId = getItemLocalStorage("userId")

    console.log("داده‌های ارسالی:", {
      CourseId: id,
      userIpAddress,
      title: "title", // یا از state مربوطه
      describe: newComment,
      userId: Number(userId), // تبدیل به عدد چون سرور انتظار long دارد
    });

    const response = await http.post("/Course/AddCommentCourse",
      {
        CourseId: id,
        userIpAddress,
        Title: "title",
        Describe: newComment,
        userId: Number(userId)
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
    setcmnt([...cmnt, response.data])
    setnewComment('')
    // console.log("add cmnt--", response.data)
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
    <>
      <div className="flex  w-full gap-3 mr-[-11px] justify-center items-center mb-5">
        <input
          className="textarea w-full text-sm font-normal text-[rgba(69,90,100,1)] rounded-2xl focus:outline-none focus:border-none shadow focus:shadow-inner  max-h-40 min-h-11"
          placeholder="نظر خودتو بنویس..."
          value={newComment}
          onChange={(e) => setnewComment(e.target.value)}
        ></input>
        <button className="btn rounded-2xl text-md font-bold text-white w-25 h-[45px] bg-[rgba(33,150,243,1)]"
          onClick={handleSubmitComment}>
          ارسال
        </button>
      </div>
      <div className=" max-h-100 shadow-inner overflow-auto p-2 rounded-2xl">
        {cmnt.map((item, index)=>(
          <div className="w-full mr-[-11px] mb-5 border-b-1 border-gray-100" key={index}>
            <div className="flex justify-between items-center">
              <div className="h-[40px] flex p-2 justify-between items-center">
                <div className="avatar">
                  <div className="w-[40px] rounded-full m-3">
                    <img src={item.pictureAddress} />
                  </div>
                </div>
                <p className="font-medium text-base">{item.author}</p>
              </div>
              <p className="font-normal text-xs">{item.insertDate}</p>
            </div>
            <p className="w-full h-[22px] text-[rgba(69,90,100,1)] text-sm font-normal mt-3 pr-5 text-right">
              {item.describe}
            </p>
            <div className="h-[25px] mt-2 flex items-end gap-2 mr-5 mb-5">
              <button className="w-[28px] h-[19px] flex items-center justify-between gap-1 cursor-pointer mr-1">
                <p className="text-red-500"> {item.likeCount}</p>
                <img className=" h-[20px]" src={heartIcon} alt="not found" />
              </button>
              <button className="w-10 h-[22px] flex items-center justify-between gap-1 cursor-pointer mr-5">
                {/* <p className="text-[rgba(69,90,100,1)] text-sm">پاسخ</p> */}
                <img className="h-[20px]" src={messagesIcon} alt="not found" />
              </button>
            </div>
          <ReplyComment commentId={item.id}/>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default Comment;

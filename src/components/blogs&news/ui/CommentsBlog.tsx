import { useEffect, useState } from "react";
import http from "../../../core/services/interceptor"
import messagesIcon from "./../../../assets/images/messagesIcon.svg";
import avatarImg from "./../../../assets/images/avatar.png";
import { useParams } from "react-router-dom";
import { getItemLocalStorage } from "../../../core/hooks/localStorage/getItem";
import axios from "axios";
import ReplyCmntBlog from "./ReplyCmntBlog";
interface Comment {
  id: string;
  text: string;
  title: string
  describe:string
  pictureAddress: string
  likeCount:number
  autor: string
  inserDate: string
  replyCount: number
  currentUserIsLike: boolean
} 
const CommentsBlog = () => {
  const [cmnt, setcmnt] = useState<Comment[]>([])
  const [newComment, setnewComment] = useState('')
  const { id } = useParams();

  const getComment= async(courseId: string) => {
    const response= await http.get(`/News/GetNewsComments?NewsId=${courseId}`)
    // const ObjArray= Object.values(response)
    return response.data
  }
  const fetchCourseComment = async(id: string) => {
    const response= await getComment(id)
    setcmnt(response)
    // console.log("blog-comments: ", response)
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

    const response = await http.post("/News/CreateNewsComment",
      {
        newsId: id,
        userIpAddress,
        title: "title",
        describe: newComment,
        userId: Number(userId)
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
    setcmnt([...cmnt, response.data])
    setnewComment('')
    console.log("add cmnt--", response.data)
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
  //comment-like
    const [isLike, setIsLike] = useState(false)
  const handleLike = async(commentId: string) => {
    await http.post(`/News/CommentLike/${commentId}?LikeType=true`)
    setIsLike(true)
  }
  useEffect(() => {
    if(isLike !== undefined){
      setIsLike(isLike)
    }
  }, [isLike])

  return (
    <>
      <div className="flex gap-5 m-auto mb-8">
        <input
          className="textarea w-full mb-3 text-sm font-normal text-[rgba(69,90,100,1)] rounded-2xl focus:outline-none focus:border-none shadow focus:shadow-inner max-h-25 min-h-11"
          placeholder="نظر خودتو بنویس..."
          value={newComment}
          onChange={(e) => setnewComment(e.target.value)}
        ></input>
        <button className="btn rounded-2xl text-sm font-bold text-white w-25 h-11 bg-[rgba(33,150,243,1)]"
          onClick={handleSubmitComment}>
          ارسال
        </button>
      </div>
      <div className=" max-h-150 shadow-inner overflow-auto p-5 rounded-2xl">
        {cmnt.map((item, index)=>(
          <div className="w-full mr-[-11px] mb-5 border-b-1 border-gray-100" key={index}>
            <div className="flex justify-between items-center">
              <div className="h-[40px] flex p-2 justify-between items-center">
                <div className="avatar">
                  <div className="w-[40px] rounded-full m-3">
                    <img src={item.pictureAddress ? item.pictureAddress : avatarImg} />
                  </div>
                </div>
                <p className="font-medium text-base">{ item.autor }</p>
              </div>
              <p className="font-normal text-xs">{item.inserDate}</p>
            </div>
            <p className="w-full h-[22px] text-[rgba(69,90,100,1)] text-sm font-normal mt-3 pr-5 text-right">
              {item.describe}
            </p>
            <div className="w-[100px] h-[25px]  mt-2 flex justify-between items-end gap-2 mr-5  ">
              <button 
              onClick={() => handleLike(item.id)}
              className={item.currentUserIsLike || (isLike===true)
                ?"text-red-500 text-right w-8 bg-[url(./assets/images/heartIcon.svg)] bg-no-repeat bg-[0%]"
                :"text-red-500 text-right w-8 bg-[url(/cardIcons/likes.svg)] bg-no-repeat bg-[0%] cursor-pointer"
              }>
                {item.likeCount}
              </button>
              <div className="w-[50px] h-[22px]  flex items-center justify-between gap-1">
                <p className="text-[rgba(69,90,100,1)]"> {item.replyCount}</p>
                <img className="h-[16px]" src={messagesIcon} alt="not found" />
              </div>
            </div>
            <ReplyCmntBlog commentId={item.id}/>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default CommentsBlog
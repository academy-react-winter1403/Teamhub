
const CardViewTwo = () => {
  return (
    <div className="bg-white relative shadow-md rounded-2xl mb-5 p-4 w-full h-45 flex gap-4" >
      <img
        src={"https://s3-alpha-sig.figma.com/img/313d/9ab6/785ae5bd57619cd36786bfeae030a4d7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G363JWGDtBtWZQ1~w5ccNfSuxwZj0CJnXV-jsxH2dxpOZGHsNG-a0t0XRM5NIEO7eX7BLxRyH-VbZrvYbnO8xITVBJ-N9Y9p381W8ypkPOt8jeGWlKe2~pzl6vLxb7CWU0-sxvjaIuQ3nuuY6svRtuDtGWRNaQeizuQ9T--Hgszd5gXJNjL3kGjNT0RFgVQKL0o-PA56erMbBW5~CMZ2HpOQkZhsAyZ5~SQRn1HyryVDUGtwlqtMu8tYsVLjfdbcbzVKVkSKHJZ5XgD-M-o8alNbcr6EIYT-eL3oPN8gZLlV-kdYev4RSfw-BRyZBqKbPUXuRzONYgFKq2qiciDPag"} alt="item"
        className="rounded-xl object-cover w-48 h-full"
      />
      <span className="flex justify-around w-13 items-center bg-pink-100 text-red-400 p-1 rounded-xl absolute top-5 right-5">
        <img src="./cardIcons/likes.svg" alt=""/>
        {"۴۵"}
      </span>
      <div className="flex-1 w-[70%]">
        <h3 className="font-medium text-right text-md">{"دوره جامع .net core صفر تا صد"}</h3>

        <p className="description w-full text-justify text-xs mt-2 text-gray-500">محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ برای مسائل واقعی دنیای نرم افزار  محبوب ترین کتابخانه ی جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و تمیز.</p>

        <div className="flex items-center justify-between w-full mt-5">
          <div className="flex justify-between w-[70%] items-center text-gray-500 mt-2 bg-gray-200 p-3 rounded-3xl text-xs gap-2">
            <span className="w-[22%] bg-[url(/cardIcons/teacher.svg)] bg-no-repeat bg-right text-left">{"دکتر بحرالعلوم"}</span>
            <span className="w-[18%] bg-[url(/cardIcons/profile-2user.svg)] bg-no-repeat bg-right text-left">{"۱۲۰ دانشجو"}</span>
            <span className='w-[14%] bg-[url(/cardIcons/note-2.svg)] bg-no-repeat bg-right  text-left'>{"۱۲ درس"}</span>
            <span className='w-[15%] bg-[url(/cardIcons/clock.svg)] bg-no-repeat bg-right text-left'>{"۵ ساعت"}</span>
            <span className='w-[17%] bg-[url(/cardIcons/calendar-2.svg)] bg-no-repeat bg-right text-left'>{"ا آذر 1402"}</span>
          </div>
          <span className="price font-bold text-xl text-blue-500">
            {"۱,۲۰۰,۰۰۰ تومان"}
          </span>
        </div>

      </div>
    </div>
  )
}

export {CardViewTwo}
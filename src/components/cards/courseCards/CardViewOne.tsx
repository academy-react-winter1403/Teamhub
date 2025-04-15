interface CardViewOneProps {
  title: string;
}

const CardViewOne = ({ title }: CardViewOneProps) => {
  return (
    <div className="bg-white shadow-md rounded-2xl mb-5 p-4 w-[30%] ">
      <img
        src={
          "https://s3-alpha-sig.figma.com/img/313d/9ab6/785ae5bd57619cd36786bfeae030a4d7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G363JWGDtBtWZQ1~w5ccNfSuxwZj0CJnXV-jsxH2dxpOZGHsNG-a0t0XRM5NIEO7eX7BLxRyH-VbZrvYbnO8xITVBJ-N9Y9p381W8ypkPOt8jeGWlKe2~pzl6vLxb7CWU0-sxvjaIuQ3nuuY6svRtuDtGWRNaQeizuQ9T--Hgszd5gXJNjL3kGjNT0RFgVQKL0o-PA56erMbBW5~CMZ2HpOQkZhsAyZ5~SQRn1HyryVDUGtwlqtMu8tYsVLjfdbcbzVKVkSKHJZ5XgD-M-o8alNbcr6EIYT-eL3oPN8gZLlV-kdYev4RSfw-BRyZBqKbPUXuRzONYgFKq2qiciDPag"
        }
        alt="item"
        className="rounded-xl object-cover w-full min-h-30"
      />
      <div className="mt-3">
        <h3 className="title font-medium text-right text-lg mr-3">{title}</h3>

        <div className="flex gap-4 items-center text-gray-600 mt-2 bg-gray-200 p-3 rounded-3xl text-xs text-left">
          <span className="lesson w-[26%] bg-[url(/cardIcons/note-2.svg)] bg-no-repeat bg-right">
            {"۱۲ درس"}
          </span>
          <span className="course-time w-[28%] bg-[url(/cardIcons/clock.svg)] bg-no-repeat bg-right">
            {"۵ ساعت"}
          </span>
          <span className="course-date w-[33%] bg-[url(/cardIcons/calendar-2.svg)] bg-no-repeat bg-right">
            {"ا آذر 1402"}
          </span>
        </div>

        <div className="flex justify-between mt-3 text-sm gap-3">
          <span className="teacher text-gray-500">
            {"مدرس: دکتر بحرالعلوم"}
          </span>
          <span className="students text-gray-500">{"۱۲۰ دانشجو"}</span>
        </div>

        <div className="flex mt-3 items-center relative justify-between">
          <span className="likes flex justify-around w-7 h-7 items-center bg-[url(/cardIcons/likes.svg)]  bg-no-repeat bg-center bg-pink-100 text-red-400 p-1 rounded-xl"></span>
          <span className="price font-bold text-lg text-blue-500">
            {"۱,۲۰۰,۰۰۰ تومان"}
          </span>
        </div>
      </div>
    </div>
  );
};

export { CardViewOne };

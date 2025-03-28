
const CourseCards = () => {
  return (
    <div className="card w-67 h-80 bg-white p-5 shadow-md">
        <img className="rounded-md" src="https://s3-alpha-sig.figma.com/img/313d/9ab6/785ae5bd57619cd36786bfeae030a4d7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G363JWGDtBtWZQ1~w5ccNfSuxwZj0CJnXV-jsxH2dxpOZGHsNG-a0t0XRM5NIEO7eX7BLxRyH-VbZrvYbnO8xITVBJ-N9Y9p381W8ypkPOt8jeGWlKe2~pzl6vLxb7CWU0-sxvjaIuQ3nuuY6svRtuDtGWRNaQeizuQ9T--Hgszd5gXJNjL3kGjNT0RFgVQKL0o-PA56erMbBW5~CMZ2HpOQkZhsAyZ5~SQRn1HyryVDUGtwlqtMu8tYsVLjfdbcbzVKVkSKHJZ5XgD-M-o8alNbcr6EIYT-eL3oPN8gZLlV-kdYev4RSfw-BRyZBqKbPUXuRzONYgFKq2qiciDPag__" alt="" />
        <div className="title"></div>
        <div className="flex">
            <span className="lesson"></span>
            <span className="couseTime"></span>
            <span className="date"></span>
        </div>
        <div className="flex">
            <span className="teacher"></span>
            <span className="students"></span>
        </div>
        <div className="flex">
            <span className="likes"></span>
            <span className="price"></span>
        </div>
    </div>
  )
}

export {CourseCards}
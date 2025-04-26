
const BlogText = ({ describe }: any) => {
  return (
    <>
           <div className=" w-[842px] text-right mx-auto  ">
        <h1 className="text-2xl font-bold pb-5">چگونه اموزش ببینیم ؟</h1>
        <p className="font-normal text-base leading-[28px] text-[rgba(69,90,100,1)]">
          {describe}
        </p>
        <ul
          className="text-base font-medium leading-[28px] pb-4 pt-3 pr-4 marker:text-blue-500"
          style={{ listStyleType: "disc" }}
        >
          <li className="pb-5 font-medium text-[rgba(69,90,100,1)]">
            <h1 className="inline font-bold text-gray-800">افزایش انرژی:</h1>{" "}
            کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون،
            کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این احتشام
            ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به ارمغان بیاورد.
          </li>
          <li className="text-base font-medium leading-[28px] pb-4 text-[rgba(69,90,100,1)] ">
            <h1 className=" inline font-bold text-gray-800">افزایش هوشیاری:</h1>{" "}
            مصرف قهوه می‌تواند تمرکز و هوشیاری شمارا بهبود بخشد. کافئین می‌تواند
            عملکرد مغزی را بهبود دهد و به شما کمک کند در موقعیت‌های مختلف ازجمله
            مطالعه، کار، و مذاکره بهتر عمل کنید.
          </li>
          <li className="text-base font-medium leading-[28px] pb-4 text-[rgba(69,90,100,1)]">
            <h1 className=" inline font-bold text-gray-800">
              افزایش سطح انرژی بدن:{" "}
            </h1>{" "}
            کافئین می‌تواند به افزایش سطح هورمون‌هایی مانند اپینفرین (آدرنالین)
            کمک کند. این هورمون‌ها به تنظیم مقدار قند خون و افزایش فعالیت قلب و
            عروق کمک می‌کنند، که نتیجه آن افزایش انرژی و تحرک در بدن است.
          </li>
        </ul>
      </div>
    </>
  )
}

export default BlogText

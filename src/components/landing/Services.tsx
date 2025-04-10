import OurServices from "../cards/landing/ui/OurServices";

const Services = () => {
  return (
    <div className="w-9/10 h-100 items-center flex flex-col justify-around">
      <div className="flex flex-col justify-around">
        <h4 className="font-black text-4xl ">خدمات ما</h4>
        <span className="w-full h-1 bg-[#2196F3] bg-linear-to-l from-white to-[#2196F3] "></span>
      </div>
      <OurServices />
    </div>
  );
};

export default Services;

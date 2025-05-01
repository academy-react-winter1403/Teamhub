import OurServices from "../cards/landing/ui/OurServices";

const Services = () => {
  return (
    <div className=" items-center flex flex-col justify-around">
      <div className="flex justify-center mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 relative">
          <span className="relative z-10">خدمات ما</span>
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 via-blue-400 to-gray-100 transform -translate-y-2 -mb-4"></span>
        </h2>
      </div>
      <OurServices />
    </div>
  );
};

export default Services;

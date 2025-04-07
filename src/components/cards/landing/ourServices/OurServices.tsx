import {
  BriefCase,
  PersonalCard,
  Favorite,
} from "../../../../assets/icons/landing/OurServiceIcons";

import { LandingServiceTxt } from "../../../../core/constants/mock/LandingService";

const OurServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {LandingServiceTxt.map((service, index) => (
        <div
          key={index}
          className="w-101 h-72 border-2 border-[#ECEFF1] rounded-4xl p-4"
        >
          <div className="w-full h-24 rounded-4xl flex items-center justify-center">
            {index === 0 && <BriefCase />}
            {index === 1 && <PersonalCard />}
            {index === 2 && <Favorite />}
          </div>

          <h5 className="text-xl font-semibold mt-4 mb-5">{service.title}</h5>
          <p className="text-sm text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default OurServices;

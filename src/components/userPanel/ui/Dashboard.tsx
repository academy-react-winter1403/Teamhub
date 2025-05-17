import Attracting from "./Attracting";
import DashPeriod from "./DashPeriod";
import Information from "./Information";

const Dashboard = () => {
  return (
    <>
      <div className="divider divider-neutral text-xl ">داشبورد</div>
      <div className="w-full flex flex-col justify-evenly  ">
        {/* upside  */}
        {/* Attracting attention */}
        <Attracting />
        <div className="w-full h-70 border-2 border-[#e9e8ff] rounded-xl flex flex-col">
          {/* inforamtion */}
          <Information />
        </div>
        {/* downside */}
        <div className="w-full h-1/2 flex  gap-x-5">
          <DashPeriod />
        </div>
      </div>
    </>
  );
};
export default Dashboard;

import Dash from "../../cards/panel/Dash";
import Information from "./Information";
import PanelNavbar from "./PanelNavbar";

const Dashboard = () => {
  return (
    <div className="w-full h-10/12 flex flex-col justify-evenly  ">
      {/* upside  */}
      <div className="w-full h-1/3 border-2 border-blue-500 rounded-xl">
        {/*  */}
        <Information />
      </div>
      {/* downside */}
      <div className="w-full h-1/2 flex ">
        <div className="h-full w-1/2 p-2.5 flex flex-col justify-between">
          <PanelNavbar />
          <Dash />
          <Dash />
        </div>
        <div className="h-full w-1/2 p-2.5 flex flex-col justify-between">
          <PanelNavbar />
          <Dash />
          <Dash />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

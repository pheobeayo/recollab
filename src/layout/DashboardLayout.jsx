import Sidebar from "../components/Sidebar";
import { Outlet} from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";


const DashboardLayout = () => {


  return (
    <div>
      <div className="flex bg-white">
        <Sidebar />
        <div className="px-6 w-[100%] lg:w-[80%] md:w-[80%] h-auto lg:h-[100vh] md:h-[100vh] overflow-y-scroll bg-[#E8E8E8]">
          <MobileSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

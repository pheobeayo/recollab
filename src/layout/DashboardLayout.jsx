import Sidebar from "../components/Sidebar";
import {Navigate, Outlet} from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";


const DashboardLayout = () => {
  const { isConnected } = useWeb3ModalAccount();

  return !isConnected ? <Navigate to={'/'} /> :(
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

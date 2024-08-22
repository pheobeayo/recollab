import logo from "../assets/logo.svg"
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#123962] text-white py-8 px-2">
      <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
        <div className="w-[50%] lg:items-start md:items-start">
          <img src={logo} alt="" className="w-[150px] h-[60px] mb-4 cursor-pointer" />
        </div>
        <div className="flex items-end justify-between flex-col lg:flex-row md:flex-row ">
          <div className="flex gap-4 mt-4 ">
            <FaXTwitter className="mr-2 text-xl cursor-pointer" />
            <AiOutlineDiscord className="mr-2 text-xl cursor-pointer" />
            <MdMailOutline className="text-xl mr-2 cursor-pointer" />
            <FaLinkedin className="text-xl mr-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

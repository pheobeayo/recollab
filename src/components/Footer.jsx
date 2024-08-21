import logo from "../assets/logo.svg"
import { AiOutlineDiscord } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="bg-[#123962] text-white bg-no-repeat py-8 px-2"

    >
      <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
        <div className="lg:w-[40%] md:w-[40%] w-[100%] ml-auto my-6 flex flex-col lg:items-start  md:items-start  items-center">
          <img src={logo} alt="" className="w-[150px] h-[60px]  mb-4" />

        </div>
        <div className="lg:w-[60%] md:w-[60%] w-[90%] items-end">
          <div className="flex items-end w-[100%]">
            <FaXTwitter className="mr-2 text-xl" />
            <AiOutlineDiscord className="mr-2 text-xl" />
            <MdMailOutline className="text-xl mr-2" />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

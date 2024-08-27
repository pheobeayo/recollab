import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { TbSettings } from "react-icons/tb";
import { FcCollaboration } from "react-icons/fc";
import { RxUpdate } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import { HiMiniUsers } from "react-icons/hi2";

const Sidebar = () => {
   

    const activeStyle = {
        backgroundColor: '#FFFFFF40',
        width: '100%',
        padding: '20px',
        borderRadius: '10px'
    };

    return (
        <div className='bg-[#123962] w-[20%] text-white p-8 py-12 h-[100vh] hidden lg:flex md:flex flex-col'>
            <img src={logo} alt='logo' className="mb-20" />
            <NavLink to="/project" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]" style={({ isActive }) => isActive ? activeStyle : null} end><GoProjectSymlink className="mr-4" /> Projects</NavLink>
            <NavLink to="collaborators" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]" style={({ isActive }) => isActive ? activeStyle : null}><HiMiniUsers className="mr-4" />Collaborators</NavLink>
            <NavLink to="chats" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]" style={({ isActive }) => isActive ? activeStyle : null}><BiBox className="mr-4" /> Chats</NavLink>
            <NavLink to="updates" className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]" style={({ isActive }) => isActive ? activeStyle : null}><RxUpdate className="mr-4" /> Updates</NavLink>
            <button className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]" ><TbSettings className="mr-4" /> Log out</button>
        </div>
    );
}

export default Sidebar;
import  { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { TbSettings } from "react-icons/tb";
import { FcCollaboration } from "react-icons/fc";
import { RxUpdate } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'

const MobileSidebar = () => {
  const [isOpen, setOpen] = useState(false);


  const activeStyle = {
    borderLeft: '1px solid #2A382A',
    borderRight: '1px solid #2A382A',
    width: '100%',
    padding: '20px'
  };

  return (
    <header className="lg:hidden md:hidden flex justify-between my-4 relative">
            <img src={logo} alt="" className="w-[150px] my-4" />
      <Hamburger toggled={isOpen} toggle={setOpen} color="#427142" direction="right"/>
      {isOpen && (
        <div className="bg-[#123962] text-white p-8 py-12 h-[100vh] w-[100%] absolute top-20 left-0 bg-baseBlack/70 z-50">
            <w3m-button />
          <NavLink
            to="/dashboard"
            className="text-[14px] text-white flex items-center py-4 my-4 px-4 hover:text-[#00AEE6]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            end
          >
            <CgHomeAlt className="mr-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="projects"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            < GoProjectSymlink className="mr-4" /> Projects
          </NavLink>
          <NavLink
            to="collaborators"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <FcCollaboration className="mr-4" />
            Collaborators
          </NavLink>
          <NavLink
            to="chats"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <BiBox className="mr-4" /> Chats
          </NavLink>
          <NavLink
            to="updates"
            className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            < RxUpdate className="mr-4" /> Updates
          </NavLink>
          <button className="text-[14px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#00AEE6]">
            <TbSettings className="mr-4" /> Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default MobileSidebar;

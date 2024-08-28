import React from 'react'
import { MdOutlineFilterList } from "react-icons/md";
import TableData from '../../components/TableData';
import CreateProfile from '../../components/CreateProfile';

const Profile = () => {
  return (
    <main>
       <header className="flex justify-between lg:items-center md:items-center items-start bg-white rounded-lg p-2 my-4 flex-col lg:flex-row md:flex-row">
        <h2 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] my-4 lg:my-0 md:my-0">
          Profile
        </h2>
        <div className="flex bg-[#EAE0E0] rounded-md lg:w-[60%] md:w-[60%] w-[100%] px-4 py-2 justify-between">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-0"
          />
          <MdOutlineFilterList className="text-4xl" />
        </div>
        <div className="hidden lg:block md:block">
          <w3m-button />
        </div>
      </header>
      <section>
        <CreateProfile />
      </section>
      <section>
        <TableData />
      </section>
    </main>
  )
}

export default Profile
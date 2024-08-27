import React from "react";
import { useEffect, useState } from "react";
import { getRecollabContract } from "../../constants/contract";
import { getProvider }from '../../constants/providers'
import { ethers } from "ethers";
import { toast } from 'react-toastify'
import { isSupportedChain } from "../../connection";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { MdOutlineFilterList } from "react-icons/md";

const Project = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [count, setCount] = useState(0);

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function fetchAllProjects() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getRecollabContract(signer);

    try {
      const res = await contract.getAllProjects();
      const converted = res?.map((item, index) => {
        return {
          id: index + 1,
          address: item[0],
          projectDetails: item[1],
          upvoted: item[3],
          downVoted: item[4],
        };
      });
      setAllProjects(converted);
    } catch (error) {
      console.error(error);
      toast.error("Profile creation failed!", {
        position: "top-center",
      });
    } finally {
    }
  }

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <main>
      <header className="flex justify-between lg:items-center md:items-center items-start bg-white rounded-lg p-2 my-4 flex-col lg:flex-row md:flex-row">
        <h2 className="lg:text-[24px] md:text-[24px] text-[18px] font-[700] my-4 lg:my-0 md:my-0">
          Projects
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
      <section className="flex justify-between flex-wrap my-6">
      {allProjects.map((info) => (<div className="w-[90%] lg:w-[32%] md:w-[32%] p-6 bg-white rounded-lg text-[14px]">
          <p className="truncate">
            <strong>Owner</strong> {info.address}
          </p>
          <p>
            <strong>Project Details</strong>To learn more about this innovative project 
            <a href={info.projectDetails} target="_blank"> click here</a>
          </p>
          <p>
            <strong>Upvotes</strong> {Number(info.upvoted)}
          </p>
          <p>
            <strong>Downvotes</strong> {Number(info.downVoted)}
          </p>
          <button className="bg-[#00AEE6] p-4 rounded-lg w-[50%] mx-auto text-white">
            View Details
          </button>
        </div>))}
      </section>
    </main>
  );
};

export default Project;

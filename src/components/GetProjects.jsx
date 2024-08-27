import { useEffect, useState } from "react";
import { getRecollabContract } from "../constants/contract";
import { getProvider }from '../constants/providers'
import { ethers } from "ethers";
import { toast } from 'react-toastify'
import { isSupportedChain } from "../connection";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const GetProjects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [count, setCount] = useState(0);

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider()

    async function fetchAllProjects() {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
    
        const contract = getRecollabContract(signer);
    
        try {
          const res = await contract.getAllProjects();
          const converted = res?.map((item, index)=>{
              return{
              id: index+1,
              address: item[0],
              projectDetails: item[1],
              upvoted: item[3],
              downVoted: item[4], 
            }      
          }) 
          setAllProjects(converted)
    
        } catch (error) {
          console.error(error);
          toast.error("Profile creation failed!", {
            position: "top-center",
          });
        } finally {
       
        }
      };

      useEffect(() => {
        fetchAllProjects()
      },[])

      console.log(allProjects)

}

export default GetProjects;
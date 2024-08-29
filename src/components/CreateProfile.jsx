import  { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getProvider }from '../constants/providers'
import { isSupportedChain } from '../connection/index'
import { getRecollabContract } from '../constants/contract';
import { ethers } from "ethers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, -50%)',
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    border: '1px solid #42714262',
    backgroundColor: '#1E1D34',
    p: 4,
  };

const CreateProfile = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userName, setUserName] = useState('');
    const [bio, setBio] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [userContact, setUserContact] = useState({ email: '', phoneno: '', linkedin: '' });
    const { address } = useWeb3ModalAccount();
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const timeCreated = Date.now();



    const handleContact = (e) => {
      const { name, value } = e.target;
      setUserContact(prev => ({ ...prev, [name]: value }));
  };



    async function handleCreateProfile() {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
    
        const contract = getRecollabContract(signer);
    
        const creatorprofile = {
          owner: address,
          name: userName,
          bio: bio,
          location: userLocation,
          portfolio: portfolio,
          contact: userContact,
          created_at: timeCreated,
          upVoted: 0,
          downVoted: 0
      };

      try {

        console.log(timeCreated, "timeCreated")
          const transaction = await contract.createProfile(creatorprofile);

          const receipt = await transaction.wait();
    
          if (receipt.status) {
            return toast.success("Profile creation successful!", {
              position: "top-center",
            });
          }
    
          toast.error("Profile creation failed", {
            position: "top-center",
          });
        } catch (error) {
          console.error(error);
          toast.error("Profile creation failed!", {
            position: "top-center",
          });
        } finally {
          setBio('')
          setUserLocation('')
          setUserName('')
          setPortfolio('')
          setUserContact('')
          setOpen(false)
        }
      };
      return (
        <div className="w-[100%] lg:w-[20%] md:w-[20%]">
            <div>
            <button className="bg-[#00AEE6] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-2 hover:bg-bg-ash hover:text-darkGrey hover:font-bold" onClick={handleOpen}>Create Profile</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <input type="text" placeholder="Address" className="rounded-lg w-[100%] text-white px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" value={address} readOnly />
            <input type="text" placeholder="Name" className="rounded-lg w-[100%] text-white px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder="Bio" className="rounded-lg w-[100%] text-white px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" onChange={(e) => setBio(e.target.value)} />
              <input type="text" placeholder='Location' className="rounded-lg w-[100%] border text-white border-white/50 px-4 py-2 bg-[#ffffff23] backdrop-blur-lg mb-4 outline-none" onChange={(e) => setUserLocation(e.target.value)} />
              <input type="email" placeholder='Portfolio' onChange={(e) => setPortfolio(e.target.value)}  className="text-white rounded-lg w-[100%] px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" />
              <input type="email" placeholder='Email' name='email' onChange={handleContact} value={userContact.email}  className="text-white rounded-lg w-[100%] px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" /> 
              <input type="text" placeholder='Phone Number' name='phoneno' onChange={handleContact} value={userContact.phoneno}  className="text-white rounded-lg w-[100%] px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" />
              <input type="email" placeholder='LinkedIn' name='linkedin' onChange={handleContact} value={userContact.linkedin}  className="text-white rounded-lg w-[100%] px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" />
              <input type="text" placeholder="Timecreated" className="rounded-lg w-[100%] text-white px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" value={timeCreated} readOnly />
              {/* <input type="text" placeholder='Upvote' onChange={() => setUpVote(0)}  className="text-white rounded-lg w-[100%] px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" readOnly value={upVote}/>
              <input type="text" placeholder='Downvote' onChange={() => setDownVote(0)} className="text-white rounded-lg w-[100%] px-4 py-2 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none" readOnly value={downVote} /> */}
              <button className="bg-[#00AEE6] text-[white] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4" onClick={handleCreateProfile}>Create &rarr;</button>
            </Box>
          </Modal>
            </div>
        </div>
      )
}

export default CreateProfile
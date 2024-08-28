import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { getProvider } from "../constants/providers";
import { isSupportedChain } from "../connection/index";
import { getRecollabContract } from "../constants/contract";
import { ethers } from "ethers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  boxShadow: 24,
  border: "1px solid #42714262",
  backgroundColor: "#1E1D34",
  p: 4,
};

const CreateProject = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [projectLink, setProjectLink] = useState();

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function handleCreateProject() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getRecollabContract(signer);

    try {
      const transaction = await contract.createProject(projectLink);
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Project creation successful!", {
          position: "top-center",
        });
      }

      toast.error("Project creation failed", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Project creation failed!", {
        position: "top-center",
      });
    } finally {
      setProjectLink();
      setOpen(false);
    }
  }
  return (
    <div className="w-[100%] lg:w-[20%]  md:w-[20%]">
        <button
          className="bg-[#00AEE6] text-white py-2 px-8 rounded-lg font-bold text-[18px] w-[100%]  my-2 hover:bg-bg-ash hover:text-darkGrey hover:font-bold"
          onClick={handleOpen}
        >
          Create Project
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input
              type="text"
              placeholder="Project Link"
              required
              className="rounded-lg w-[100%] text-white p-4 bg-[#565dbb23] border border-white/50 backdrop-blur-lg mb-4 outline-none"
              onChange={(e) => setSellerName(e.target.value)}
            />
            <button
              className="bg-[#00AEE6] text-[white] py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4"
              onClick={handleCreateProject}
            >
              Create &rarr;
            </button>
          </Box>
        </Modal>
      </div>
  );
};

export default CreateProject;

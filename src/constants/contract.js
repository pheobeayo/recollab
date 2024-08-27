import { ethers } from "ethers";
import abi from './abi.json'

export const getRecollabContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_RECOLLAB_ADDRESS,
        abi,
        providerOrSigner
    );
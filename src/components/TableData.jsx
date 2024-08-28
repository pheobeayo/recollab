import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getRecollabContract } from '../constants/contract';
import { getProvider }from '../constants/providers'
import { ethers } from "ethers";
import { toast } from 'react-toastify'
import { isSupportedChain } from "../connection";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

const TableData= () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function fetchAllProfiles() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getRecollabContract(signer);

    try {
      const res = await contract. getAllProfile();
      const converted = res?.map((item, index) => {
        return {
          id: index + 1,
          address: item[0],
          name: item[1],
          bio: item[2],
          location: item[3],
          portfolio: item[4],
          upvoted: item[7],
          downVoted: item[8],
        };
      });
      setAllProfiles(converted);
    } catch (error) {
      toast.error("An error occured", {
        position: "top-center",
      });
    } 
  }
  console.log(allProfiles)


  useEffect(() => {
    fetchAllProfiles();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#123962" }}>
          <TableRow>
            <TableCell
              sx={{ color: "white", fontWeight: "700", fontSize: "16px" }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "700", fontSize: "16px" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "700", fontSize: "16px" }}
            >
              Bio
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "700", fontSize: "16px" }}
            >
              Location
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "700", fontSize: "16px" }}
            >
             Portfolio
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "700", fontSize: "16px" }}
            >
             Upvoted
            </TableCell>
            <TableCell
              sx={{ color: "white", fontWeight: "700", fontSize: "16px" }}
            >
             Downvoted
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProfiles?.map((item) => (
            <TableRow >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.bio}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell><a href={item.portfolio}>Portfolio link</a></TableCell>
              <TableCell>
                {Number(item.upvoted)}
              </TableCell>
              <TableCell>{Number(item.downVoted)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
import { ethers } from "ethers";
import { contractAddress } from '../config/config';
import AuctionHouseContractArtifact from "../artifacts/contracts/AuctionHouse.sol/AuctionHouse.json";

export const loadContract = (signer) => {
    return new ethers.Contract(contractAddress, AuctionHouseContractArtifact.abi, signer);
}
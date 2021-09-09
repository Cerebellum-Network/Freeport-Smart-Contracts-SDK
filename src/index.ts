import { ethers, BigNumber } from 'ethers';
import { ExternalProvider } from '@ethersproject/providers/src.ts/web3-provider';
import {
  networks as DavinciNetworks,
  abi as DavinciABI,
} from './artifacts/Davinci.json';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

type Provider = ethers.providers.Web3Provider;

export { ethers };

export const importProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

export const getDavinciAddress = async (
  provider: Provider
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  if (chainId in DavinciNetworks) {
    // @ts-expect-error: index networks using string
    const network = DavinciNetworks[chainId];

    return network.address;
  }

  throw new Error('Cannot find contract address');
};

export const getDavinciContract = async (
  provider: Provider,
  address: string
): Promise<ethers.Contract> => {
  return new ethers.Contract(address, DavinciABI, provider);
};

export const getCurrentDavinciContract = async (): Promise<ethers.Contract> => {
  const provider = importProvider();
  const davinciAddress = await getDavinciAddress(provider);
  return await getDavinciContract(provider, davinciAddress);
};

// TODO: DRY, create correct abstractions
export const balanceOf = async (
  address: string,
  nftId: string
): Promise<number> => {
  const provider = importProvider();
  const davinciAddress = await getDavinciAddress(provider);
  const davinciContract = await getDavinciContract(provider, davinciAddress);
  const result: BigNumber = await davinciContract.balanceOf(address, nftId);
  return result.toNumber();
};

export const getOffer = async (
  seller: string,
  nftId: string
): Promise<number> => {
  const provider = importProvider();
  const davinciAddress = await getDavinciAddress(provider);
  let davinciContract = await getDavinciContract(provider, davinciAddress);
  const signer = provider.getSigner()
  davinciContract = davinciContract.connect(signer);
  const result = await davinciContract.getOffer(seller, nftId);
  return result.toNumber();
};

export const makeOffer = async (
  nftId: string,
  price: number
): Promise<void> => {
  const provider = importProvider();
  const davinciAddress = await getDavinciAddress(provider);
  let davinciContract = await getDavinciContract(provider, davinciAddress);
  const signer = provider.getSigner()
  davinciContract = davinciContract.connect(signer);
  await davinciContract.makeOffer(nftId, price);
};

export const takeOffer = async (
    buyer: string,
    seller: string,
    nftId: string,
    price: number,
    amount: number
): Promise<void> => {
  const provider = importProvider();
  const davinciAddress = await getDavinciAddress(provider);
  let davinciContract = await getDavinciContract(provider, davinciAddress);
  const signer = provider.getSigner()
  davinciContract = davinciContract.connect(signer);
  await davinciContract.takeOffer(buyer, seller, nftId, price, amount);
};

import { ethers } from 'ethers';
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

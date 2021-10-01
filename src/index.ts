// eslint-disable-next-line import/no-extraneous-dependencies
import { ExternalProvider } from '@ethersproject/providers';
import {
  BigNumber,
  Contract,
  ContractInterface,
  ethers,
  providers,
  Wallet,
} from 'ethers';

import {
  abi as davinciABI,
  networks as davinciNetworks,
} from './artifacts/Davinci.json';
import {
  abi as fiatGatewayABI,
  networks as fiatGatewayNetworks,
} from './artifacts/FiatGateway.json';

export { davinciABI, ethers, fiatGatewayABI };

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

type Network = { address: string };
export type Provider = providers.Web3Provider | providers.JsonRpcProvider;

export const importProvider = (): providers.Web3Provider =>
  new providers.Web3Provider(window.ethereum);

export const createProvider = (
  providerUrl: string
): providers.JsonRpcProvider => new providers.JsonRpcProvider(providerUrl);

export const getContractAddress = async (
  provider: Provider,
  networks: Record<string, Network>
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  if (chainId in networks) {
    const network = networks[chainId];

    return network.address;
  }

  throw new Error('Cannot find contract address');
};

export const getDavinciAddress = async (provider: Provider): Promise<string> =>
  getContractAddress(provider, davinciNetworks);

export const getFiatGatewayAddress = async (
  provider: Provider
): Promise<string> => getContractAddress(provider, fiatGatewayNetworks);

export type CreateContractConfig = {
  provider: Provider;
  contractAddress: string;
  abi: ContractInterface;
  mnemonic?: string;
};

export const createContract = ({
  provider,
  contractAddress,
  abi,
  mnemonic,
}: CreateContractConfig): Contract => {
  const signer = mnemonic
    ? Wallet.fromMnemonic(mnemonic).connect(provider)
    : null;

  return new Contract(contractAddress, abi, signer ?? provider);
};

export type Davinci = ReturnType<typeof createDavinci>;
export type CreateDavinciConfig = {
  provider: Provider;
  contractAddress: string;
  mnemonic?: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createDavinci = ({
  provider,
  contractAddress,
  mnemonic,
}: CreateDavinciConfig) => {
  const contract = createContract({
    provider,
    contractAddress,
    mnemonic,
    abi: davinciABI,
  });

  const balanceOf = async (
    address: string,
    nftId: string
  ): Promise<BigNumber> => contract.balanceOf(address, nftId);

  const getOffer = async (seller: string, nftId: string): Promise<BigNumber> =>
    contract.getOffer(seller, nftId);

  const makeOffer = async (nftId: string, price: number): Promise<void> => {
    contract.makeOffer(nftId, price);
  };

  const takeOffer = async (
    buyer: string,
    seller: string,
    nftId: string,
    price: number,
    amount: number
  ): Promise<void> => {
    contract.takeOffer(buyer, seller, nftId, price, amount);
  };

  return { balanceOf, getOffer, makeOffer, takeOffer };
};

export type FiatGateway = ReturnType<typeof createFiatGateway>;
export type CreateFiatGatewayConfig = {
  provider: Provider;
  contractAddress: string;
  mnemonic?: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createFiatGateway = ({
  provider,
  contractAddress,
  mnemonic,
}: CreateFiatGatewayConfig) => {
  const contract = createContract({
    provider,
    contractAddress,
    mnemonic,
    abi: fiatGatewayABI,
  });

  const buyNftFromUsd = async (
    paidAmountUSDCents: number,
    buyerEthAddress: string,
    sellerEthAddress: string,
    nftId: string,
    nftPriceCEREUnits: number,
    nonce: number
  ): Promise<void> => {
    contract.buyNftFromUsd(
      paidAmountUSDCents,
      buyerEthAddress,
      sellerEthAddress,
      nftId,
      nftPriceCEREUnits,
      nonce
    );
  };

  return { buyNftFromUsd };
};

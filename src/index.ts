import { providers, Wallet } from 'ethers';

import type {
  FiatGateway,
  Freeport,
  NFTAttachment,
  SimpleAuction,
} from './abi-types';
import {
  FiatGateway__factory,
  Freeport__factory,
  NFTAttachment__factory,
  SimpleAuction__factory,
} from './abi-types';
import { networks as fiatGatewayNetworks } from './artifacts/FiatGateway.json';
import { networks as freeportNetworks } from './artifacts/Freeport.json';
import { networks as nftAttachmentNetworks } from './artifacts/NFTAttachment.json';
import { networks as simpleAuctionNetworks } from './artifacts/SimpleAuction.json';

export * from './abi-types';

declare global {
  interface Window {
    ethereum: ConstructorParameters<typeof providers.Web3Provider>[0];
  }
}

type Network = { address: string };

export type Signer = providers.JsonRpcSigner;
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

  throw new Error(
    `Cannot find smart contract address for chain id #${chainId}`
  );
};

export const getFreeportAddress = async (provider: Provider): Promise<string> =>
  getContractAddress(provider, freeportNetworks);

export const getFiatGatewayAddress = async (
  provider: Provider
): Promise<string> => getContractAddress(provider, fiatGatewayNetworks);

export const getSimpleAuctionAddress = async (
  provider: Provider
): Promise<string> => getContractAddress(provider, simpleAuctionNetworks);

export const getNFTAttachmentAddress = async (
  provider: Provider
): Promise<string> => getContractAddress(provider, nftAttachmentNetworks);

export type CreateSignerConfig = {
  provider: Provider;
  mnemonic?: string;
  privateKey?: string;
};

export const createSigner = ({
  provider,
  mnemonic,
  privateKey,
}: CreateSignerConfig): Wallet | Signer => {
  if (mnemonic) {
    return Wallet.fromMnemonic(mnemonic).connect(provider);
  }

  if (privateKey) {
    return new Wallet(privateKey, provider);
  }

  return provider.getSigner();
};

export type CreateContractConfig = {
  provider: Provider;
  contractAddress: string;
  mnemonic?: string;
  privateKey?: string;
};

export const createFreeport = ({
  provider,
  contractAddress,
  mnemonic,
  privateKey,
}: CreateContractConfig): Freeport => {
  const signer = createSigner({ provider, mnemonic, privateKey });

  return Freeport__factory.connect(contractAddress, signer);
};

export const createFiatGateway = ({
  provider,
  contractAddress,
  mnemonic,
  privateKey,
}: CreateContractConfig): FiatGateway => {
  const signer = createSigner({ provider, mnemonic, privateKey });

  return FiatGateway__factory.connect(contractAddress, signer);
};

export const createSimpleAuction = ({
  provider,
  contractAddress,
  mnemonic,
  privateKey,
}: CreateContractConfig): SimpleAuction => {
  const signer = createSigner({ provider, mnemonic, privateKey });

  return SimpleAuction__factory.connect(contractAddress, signer);
};

export const createNFTAttachment = ({
  provider,
  contractAddress,
  mnemonic,
  privateKey,
}: CreateContractConfig): NFTAttachment => {
  const signer = createSigner({ provider, mnemonic, privateKey });

  return NFTAttachment__factory.connect(contractAddress, signer);
};

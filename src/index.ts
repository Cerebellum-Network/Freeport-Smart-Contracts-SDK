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
import config from './config.json';

export * from './abi-types';

declare global {
  interface Window {
    ethereum: ConstructorParameters<typeof providers.Web3Provider>[0];
  }
}

type Config = typeof config;
export type Deployment = keyof Config;
type ChainId = keyof Config[Deployment];
export type ContractName = keyof Config[Deployment][ChainId];

export type Signer = providers.JsonRpcSigner;
export type Provider = providers.Web3Provider | providers.JsonRpcProvider;

export const importProvider = (): providers.Web3Provider =>
  new providers.Web3Provider(window.ethereum);

export const createProvider = (
  providerUrl: string
): providers.JsonRpcProvider => new providers.JsonRpcProvider(providerUrl);

export type GetContractAddressConfig = {
  deployment?: Deployment;
  chainId: number;
  contractName: ContractName;
};

export const getContractAddress = ({
  deployment = 'prod',
  chainId,
  contractName,
}: GetContractAddressConfig): string => {
  const networks = config[deployment];

  if (networks && chainId in networks) {
    const contracts = networks[String(chainId) as ChainId];
    const contractAddress = contracts[contractName];

    if (contractAddress) {
      return contractAddress;
    }
  }

  throw new Error(
    `Cannot find ${String(
      contractName
    )} SC address in ${deployment} deployment for chain id #${chainId}`
  );
};

export const getFreeportAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod'
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'Freeport',
  });
};

export const getFiatGatewayAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod'
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'FiatGateway',
  });
};

export const getSimpleAuctionAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod'
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'SimpleAuction',
  });
};

export const getNFTAttachmentAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod'
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'NFTAttachment',
  });
};

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

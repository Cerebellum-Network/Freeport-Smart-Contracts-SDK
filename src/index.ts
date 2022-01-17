import { providers, Wallet } from 'ethers';

import type {
  FiatGateway,
  Freeport,
  MinimalForwarder,
  NFTAttachment,
  SimpleAuction,
  TestERC20 as ERC20,
} from './abi-types';
import {
  FiatGateway__factory,
  Freeport__factory,
  MinimalForwarder__factory,
  NFTAttachment__factory,
  SimpleAuction__factory,
  TestERC20__factory as ERC20__factory,
} from './abi-types';
import config from './config.json';

const Biconomy = require('@biconomy/mexa');

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

const waitOnBiconomy = async (biconomy) =>
  new Promise((resolve, reject) => {
    biconomy.onEvent(biconomy.READY, resolve).onEvent(biconomy.ERROR, reject);
  });

export const enableBiconomy = async (
  ethersProvider: providers.JsonRpcProvider,
  biconomyApiKey: string,
  debug: boolean
) => {
  const biconomyProvider = new Biconomy(ethersProvider, {
    debug,
    apiKey: biconomyApiKey,
  });

  await waitOnBiconomy(biconomyProvider);
  return new providers.Web3Provider(biconomyProvider);
};

export const createProvider = async (
  debug = false,
  biconomyApiKey?: string
): Promise<providers.Web3Provider> => {
  let provider = importProvider();

  if (biconomyApiKey) {
    provider = await enableBiconomy(provider, biconomyApiKey, debug);
  }

  return provider;
};

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

export const getMinimalForwarderAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod'
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'MinimalForwarder',
  });
};

export const getERC20Address = async (
  provider: Provider,
  deployment: Deployment = 'prod'
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'ERC20',
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

export const createMinimalForwarder = ({
  provider,
  contractAddress,
  mnemonic,
  privateKey,
}: CreateContractConfig): MinimalForwarder => {
  const signer = createSigner({ provider, mnemonic, privateKey });

  return MinimalForwarder__factory.connect(contractAddress, signer);
};

export const createERC20 = ({
  provider,
  contractAddress,
  mnemonic,
  privateKey,
}: CreateContractConfig): ERC20 => {
  const signer = createSigner({ provider, mnemonic, privateKey });

  return ERC20__factory.connect(contractAddress, signer);
};

import { Biconomy } from '@biconomy/mexa';
import HDWalletProvider from '@truffle/hdwallet-provider';
import { providers, Signer, Wallet } from 'ethers';

import type {
  Auction,
  Collection,
  CollectionFactory,
  FiatGateway,
  Freeport,
  Marketplace,
  MinimalForwarder,
  NFTAttachment,
  SimpleAuction,
  TestERC20 as ERC20,
  USDC,
} from './abi-types';
import {
  Auction__factory,
  Collection__factory,
  CollectionFactory__factory,
  FiatGateway__factory,
  Freeport__factory,
  Marketplace__factory,
  MinimalForwarder__factory,
  NFTAttachment__factory,
  SimpleAuction__factory,
  TestERC20__factory as ERC20__factory,
  USDC__factory,
} from './abi-types';
import config from './config.json';
import configLiveOne from './config.liveone.json';
import configTreats from './config.treats.json';

export * from './abi-types';
export * from './metatx';

declare global {
  interface Window {
    ethereum: ConstructorParameters<typeof providers.Web3Provider>[0];
  }
}

export enum ApplicationEnum {
  DAVINCI = 'DAVINCI',
  LIVEONE = 'LIVEONE',
  TREATS = 'TREATS',
}

type Config = typeof config;
export type Deployment = keyof Config;
type ChainId = keyof Omit<Config[Deployment], 'Token'>;
export type ContractName = keyof Config[Deployment][ChainId];

export { Signer } from 'ethers';
export type Provider = providers.JsonRpcProvider;

export const importProvider = (): providers.Web3Provider =>
  new providers.Web3Provider(window.ethereum);

export const createProvider = (
  providerUrl: string
): providers.JsonRpcProvider => new providers.JsonRpcProvider(providerUrl);

const waitOnBiconomy = async (biconomy) =>
  new Promise((resolve, reject) => {
    biconomy.onEvent(biconomy.READY, resolve).onEvent(biconomy.ERROR, reject);
  });

export const enableBiconomy = async (
  walletProvider: any,
  biconomyApiKey: string,
  debug: boolean
): Promise<providers.Web3Provider> => {
  const biconomyProvider = new Biconomy(walletProvider, {
    debug,
    apiKey: biconomyApiKey,
  });

  await waitOnBiconomy(biconomyProvider);
  return new providers.Web3Provider(biconomyProvider);
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

export type CreateProviderConfig = {
  rpcUrl: string;
  mnemonic?: string;
  privateKey?: string;
  biconomyApiKey?: string;
  biconomyDebug?: boolean;
};

export type CreateProviderReturn = {
  provider: Provider;
  signer: Signer;
  stop: () => void;
};

const noop = () => {};

export const createProviderSigner = async ({
  rpcUrl,
  mnemonic,
  privateKey,
  biconomyApiKey,
  biconomyDebug,
}: CreateProviderConfig): Promise<CreateProviderReturn> => {
  if (biconomyApiKey) {
    // Mode with Biconomy, HDWallet, and the default RPC provider of HDWallet.
    const providerOrUrl = rpcUrl;
    const walletOptions = mnemonic
      ? {
          providerOrUrl,
          mnemonic: { phrase: mnemonic },
        }
      : {
          providerOrUrl,
          privateKeys: [privateKey ?? ''],
        };

    const walletProvider = new HDWalletProvider(walletOptions);

    const stop = () => {
      walletProvider.engine.stop();
    };

    const provider = await enableBiconomy(
      walletProvider, // HDWallet
      biconomyApiKey,
      !!biconomyDebug
    );
    const signer = provider.getSigner();
    return { provider, signer, stop };
  }

  // Mode with ethers.
  const provider = new providers.JsonRpcProvider(rpcUrl);
  const signer = createSigner({ provider, mnemonic, privateKey });

  return { provider, signer, stop: noop };
};

export type GetContractAddressConfig = {
  deployment?: Deployment;
  chainId: number;
  contractName: ContractName;
  application?: ApplicationEnum;
};

const getNetworks = (
  application: ApplicationEnum,
  deployment: Deployment
): Record<ChainId, ContractName> => {
  if (application === ApplicationEnum.DAVINCI) {
    return config[deployment];
  }

  if (application === ApplicationEnum.LIVEONE) {
    return configLiveOne[deployment];
  }

  if (application === ApplicationEnum.TREATS) {
    return configTreats[deployment];
  }

  throw new Error('Unknown application');
};

export const getContractAddress = ({
  deployment = 'prod',
  chainId,
  contractName,
  application = ApplicationEnum.DAVINCI,
}: GetContractAddressConfig): string => {
  const networks = getNetworks(application, deployment);

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

export type TokenConfig = {
  symbol: string;
  decimals: number;
};

export const getTokenConfig = (env = 'dev'): TokenConfig => {
  const { Token } = config[env];
  if (!Token) {
    throw new Error(`Cannot find Token configuration for env: ${env}`);
  }

  return Token;
};

export const getFreeportAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'Freeport',
    application,
  });
};

export const getFiatGatewayAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'FiatGateway',
    application,
  });
};

export const getSimpleAuctionAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'SimpleAuction',
    application,
  });
};

export const getNFTAttachmentAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'NFTAttachment',
    application,
  });
};

export const getMinimalForwarderAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'MinimalForwarder',
    application,
  });
};

export const getERC20Address = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'ERC20',
    application,
  });
};

export const getUSDCAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'USDC',
    application,
  });
};

export const getCollectionFactoryAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'CollectionFactory',
    application,
  });
};

export const getMarketplaceAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'Marketplace',
    application,
  });
};

export const getAuctionAddress = async (
  provider: Provider,
  deployment: Deployment = 'prod',
  application: ApplicationEnum = ApplicationEnum.DAVINCI
): Promise<string> => {
  const { chainId } = await provider.getNetwork();

  return getContractAddress({
    deployment,
    chainId,
    contractName: 'Auction',
    application,
  });
};

export type CreateContractConfig = {
  signer: Signer;
  contractAddress: string;
};

export const createFreeport = ({
  signer,
  contractAddress,
}: CreateContractConfig): Freeport =>
  Freeport__factory.connect(contractAddress, signer);

export const createFiatGateway = ({
  signer,
  contractAddress,
}: CreateContractConfig): FiatGateway =>
  FiatGateway__factory.connect(contractAddress, signer);

export const createSimpleAuction = ({
  signer,
  contractAddress,
}: CreateContractConfig): SimpleAuction =>
  SimpleAuction__factory.connect(contractAddress, signer);

export const createNFTAttachment = ({
  signer,
  contractAddress,
}: CreateContractConfig): NFTAttachment =>
  NFTAttachment__factory.connect(contractAddress, signer);

export const createMinimalForwarder = ({
  signer,
  contractAddress,
}: CreateContractConfig): MinimalForwarder =>
  MinimalForwarder__factory.connect(contractAddress, signer);

export const createERC20 = ({
  signer,
  contractAddress,
}: CreateContractConfig): ERC20 =>
  ERC20__factory.connect(contractAddress, signer);

export const createUSDC = ({
  signer,
  contractAddress,
}: CreateContractConfig): USDC =>
  USDC__factory.connect(contractAddress, signer);

export const createCollectionFactory = ({
  signer,
  contractAddress,
}: CreateContractConfig): CollectionFactory =>
  CollectionFactory__factory.connect(contractAddress, signer);

export const createMarketplace = ({
  signer,
  contractAddress,
}: CreateContractConfig): Marketplace =>
  Marketplace__factory.connect(contractAddress, signer);

export const createAuction = ({
  signer,
  contractAddress,
}: CreateContractConfig): Auction =>
  Auction__factory.connect(contractAddress, signer);

export const createCollection = ({
  signer,
  contractAddress,
}: CreateContractConfig): Collection =>
  Collection__factory.connect(contractAddress, signer);

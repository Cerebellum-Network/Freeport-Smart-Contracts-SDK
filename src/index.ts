import { providers, Wallet, Signer } from 'ethers';

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

import { Biconomy } from '@biconomy/mexa';
const Web3 = require('web3');
import HDWalletProvider from '@truffle/hdwallet-provider';

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

export { Signer };
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
  ethersProvider: providers.JsonRpcProvider,
  walletProvider: any,
  biconomyApiKey: string,
  debug: boolean
) => {
  const biconomyProvider = new Biconomy(walletProvider, {
    debug,
    apiKey: biconomyApiKey,
    //walletProvider,
  });

  await waitOnBiconomy(biconomyProvider);
  return new providers.Web3Provider(biconomyProvider);
};

export type CreateProviderConfig = {
  rpcUrl: string;
  mnemonic?: string;
  privateKey?: string;
  biconomyApiKey?: string;
};

export type CreateProviderReturn = {
  provider: Provider;
  signer: Signer;
};

export const createProviderSigner = async ({
  rpcUrl,
  mnemonic,
  privateKey,
  biconomyApiKey,
}: CreateProviderConfig): Promise<CreateProviderReturn> => {
  let provider = new providers.JsonRpcProvider(rpcUrl);
  let signer = createSigner({ provider, mnemonic, privateKey });

  if (biconomyApiKey) {
    let providerOrUrl = rpcUrl;
    let walletOptions = mnemonic
      ? {
          providerOrUrl,
          mnemonic: { phrase: mnemonic },
        }
      : {
          providerOrUrl,
          privateKeys: [privateKey || ''],
        };

    let walletProvider = new HDWalletProvider(walletOptions);

    const debug = false;

    provider = await enableBiconomy(
      provider, // ethers
      walletProvider, // HDWallet
      biconomyApiKey,
      debug
    );
    signer = provider.getSigner();
  }

  return { provider, signer };
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
  signer: Signer;
  contractAddress: string;
};

export const createFreeport = ({
  signer,
  contractAddress,
}: CreateContractConfig): Freeport => {
  return Freeport__factory.connect(contractAddress, signer);
};
/*
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
*/

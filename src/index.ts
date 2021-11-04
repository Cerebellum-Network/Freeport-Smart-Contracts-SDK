// eslint-disable-next-line import/no-extraneous-dependencies
import { ExternalProvider } from '@ethersproject/providers';
import { ethers, providers, Wallet } from 'ethers';

import type { Davinci, FiatGateway, SimpleAuction } from './abi-types';
import {
  Davinci__factory,
  FiatGateway__factory,
  SimpleAuction__factory,
} from './abi-types';
import { networks as davinciNetworks } from './artifacts/Davinci.json';
import { networks as fiatGatewayNetworks } from './artifacts/FiatGateway.json';
import { networks as simpleAuctionNetworks } from './artifacts/SimpleAuction.json';

export { ethers };

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

export const getSimpleAuctionAddress = async (
  provider: Provider
): Promise<string> => getContractAddress(provider, simpleAuctionNetworks);

export type CreateSignerConfig = {
  provider: Provider;
  mnemonic?: string;
};

export const createSigner = ({
  provider,
  mnemonic,
}: CreateSignerConfig): ethers.Wallet | ethers.providers.JsonRpcSigner =>
  mnemonic
    ? Wallet.fromMnemonic(mnemonic).connect(provider)
    : provider.getSigner();

export type CreateConfig = {
  provider: Provider;
  contractAddress: string;
  mnemonic?: string;
};

export const createDavinci = ({
  provider,
  contractAddress,
  mnemonic,
}: CreateConfig): Davinci => {
  const signer = createSigner({ provider, mnemonic });

  return Davinci__factory.connect(contractAddress, signer);
};

export const createFiatGateway = ({
  provider,
  contractAddress,
  mnemonic,
}: CreateConfig): FiatGateway => {
  const signer = createSigner({ provider, mnemonic });

  return FiatGateway__factory.connect(contractAddress, signer);
};

export const createSimpleAuction = ({
  provider,
  contractAddress,
  mnemonic,
}: CreateConfig): SimpleAuction => {
  const signer = createSigner({ provider, mnemonic });

  return SimpleAuction__factory.connect(contractAddress, signer);
};

import 'dotenv/config';

import config from './config.json';
import configLiveone from './config.liveone.json';
import {
  ApplicationEnum,
  createCollectionFactory,
  createFreeport,
  createProviderSigner,
  createSimpleAuction,
  Deployment,
  getCollectionFactoryAddress,
  getContractAddress,
  getFreeportAddress,
  getSimpleAuctionAddress,
} from './index';

// const TESTNET_URL = 'https://rpc-mumbai.maticvigil.com';
const TESTNET_URL =
  'https://ropsten.infura.io/v3/0d496480092e423d90617329306a0e1b';

jest.setTimeout(30e3);

const deployment = 'dev' as Deployment;
const mnemonic = process.env.TESTNET_MNEMONIC;

// An account for biconomy tests without MATIC.
const ADDRESS_WITHOUT_MATIC = '0xa6869d9F3502181e51141A0603Ac572554aA680E';
const MNEMONIC_WITHOUT_MATIC =
  'easy boost bus enter grow weekend master coffee mouse laundry pigeon nurse';
const biconomyApiKey = process.env.BICONOMY_API_KEY;

const testIfMnemonic = mnemonic ? test : test.skip;

testIfMnemonic('instantiate a provider and a contract', async () => {
  const { provider, signer, stop } = await createProviderSigner({
    rpcUrl: TESTNET_URL,
    mnemonic,
    biconomyApiKey: undefined, // env var not set
  });

  const freeportAddress = await getFreeportAddress(provider, deployment);
  const freeport = createFreeport({
    signer,
    contractAddress: freeportAddress,
  });

  const auctionAddress = await getSimpleAuctionAddress(provider, deployment);
  const auction = createSimpleAuction({
    signer,
    contractAddress: auctionAddress,
  });

  const currencyBN = await freeport.CURRENCY();
  const currency = currencyBN.toNumber();
  expect(currency).toBe(0);

  const tx = await freeport.issue(10, '0x');
  const receipt = await tx.wait();
  const event = receipt.events![0];

  expect(event).toBeTruthy();
  expect(event.eventSignature).toBe(
    'TransferSingle(address,address,address,uint256,uint256)'
  );
  expect(event.args!.from).toBe('0x0000000000000000000000000000000000000000');

  stop();
});

const testIfBiconomy = biconomyApiKey ? test : test.skip;

testIfBiconomy(
  'instantiate a provider and a contract with Biconomy',
  async () => {
    const { provider, signer, stop } = await createProviderSigner({
      rpcUrl: TESTNET_URL,
      mnemonic: MNEMONIC_WITHOUT_MATIC,
      biconomyApiKey,
      biconomyDebug: false,
    });

    const freeportAddress = await getFreeportAddress(provider, deployment);
    const freeport = createFreeport({
      signer,
      contractAddress: freeportAddress,
    });

    const auctionAddress = await getSimpleAuctionAddress(provider, deployment);
    const auction = createSimpleAuction({
      signer,
      contractAddress: auctionAddress,
    });

    // FIXME: add collection factory
    // const collectionFactoryAddress = await getCollectionFactoryAddress(
    //   provider,
    //   deployment
    // );
    // const collectionFactory = createCollectionFactory({
    //   signer,
    //   contractAddress: collectionFactoryAddress,
    // });
    //
    const currencyBN = await freeport.CURRENCY();
    const currency = currencyBN.toNumber();
    expect(currency).toBe(0);

    // Mint an NFT.
    const tx = await freeport.issue(1, '0x', { gasLimit: 1e6 });
    const receipt = await tx.wait();
    const event = receipt.events![0];
    const user = await signer.getAddress();
    const sender = receipt.from;

    expect(event).toBeTruthy();
    expect(event.eventSignature).toBe(
      'TransferSingle(address,address,address,uint256,uint256)'
    );
    expect(event.args!.from).toBe('0x0000000000000000000000000000000000000000');
    expect(event.args!.to).toBe(user); // Minted to the user.
    expect(user).toEqual(ADDRESS_WITHOUT_MATIC);
    expect(sender).not.toEqual(user); // Transaction sent by Biconomy.

    stop();
  }
);

test('Application parameter should use different config', () => {
  const contractAddress = getContractAddress({
    chainId: 3,
    contractName: 'Freeport',
    deployment: 'dev',
  });

  expect(contractAddress).toEqual(config.dev['3'].Freeport);

  const liveOneContractAddress = getContractAddress({
    chainId: 80_001,
    contractName: 'Freeport',
    deployment: 'dev',
    application: ApplicationEnum.LIVEONE,
  });

  expect(liveOneContractAddress).toEqual(configLiveone.dev['80001'].Freeport);
});

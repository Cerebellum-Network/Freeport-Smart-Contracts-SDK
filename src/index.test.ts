import 'dotenv/config';

import {
  createFreeport,
  createProvider,
  createSigner,
  createProviderSigner,
  Deployment,
  Freeport,
  getFreeportAddress,
} from './index';

import {
  FiatGateway__factory,
  Freeport__factory,
  MinimalForwarder__factory,
  NFTAttachment__factory,
  SimpleAuction__factory,
  TestERC20__factory as ERC20__factory,
} from './abi-types';

const TESTNET_URL = 'https://rpc-mumbai.maticvigil.com';

jest.setTimeout(30e3);

const deployment = 'dev' as Deployment;
const mnemonic = process.env.TESTNET_MNEMONIC;
const privateKey = process.env.TESTNET_PRIVATE_KEY;

test('instantiate a provider and a contract', async () => {
  const biconomyApiKey = ''; //process.env.BICONOMY_API_KEY;

  const { provider, signer } = await createProviderSigner({
    rpcUrl: TESTNET_URL,
    mnemonic,
    //privateKey,
    biconomyApiKey,
  });

  const contractAddress = await getFreeportAddress(provider, deployment);

  const freeport = Freeport__factory.connect(contractAddress, signer);

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
});

test('instantiate a provider and a contract with Biconomy', async () => {
  const biconomyApiKey = process.env.BICONOMY_API_KEY;

  const { provider, signer } = await createProviderSigner({
    rpcUrl: TESTNET_URL,
    mnemonic,
    //privateKey,
    biconomyApiKey,
  });

  const senderAddress = await signer.getAddress();
  console.log('senderAddress', senderAddress);

  const contractAddress = await getFreeportAddress(provider, deployment);

  const freeport = Freeport__factory.connect(contractAddress, signer);

  const currencyBN = await freeport.CURRENCY();
  const currency = currencyBN.toNumber();
  expect(currency).toBe(0);

  const tx = await freeport.issue(10, '0x', { gasLimit: 1e6 });
  const receipt = await tx.wait();
  const event = receipt.events![0];

  expect(event).toBeTruthy();
  expect(event.eventSignature).toBe(
    'TransferSingle(address,address,address,uint256,uint256)'
  );
  expect(event.args!.from).toBe('0x0000000000000000000000000000000000000000');
});

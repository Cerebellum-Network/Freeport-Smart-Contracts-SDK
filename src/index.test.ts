import 'dotenv/config';

import { createProviderSigner, Deployment, getFreeportAddress } from './index';

import { Freeport__factory } from './abi-types';

const TESTNET_URL = 'https://rpc-mumbai.maticvigil.com';

jest.setTimeout(30e3);

const deployment = 'dev' as Deployment;
const mnemonic = process.env.TESTNET_MNEMONIC;
const biconomyApiKey = process.env.BICONOMY_API_KEY;

test('instantiate a provider and a contract', async () => {
  const { provider, signer, stop } = await createProviderSigner({
    rpcUrl: TESTNET_URL,
    mnemonic,
    biconomyApiKey: undefined, // env var not set
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

  stop();
});

const testIfBiconomy = biconomyApiKey ? test : test.skip;

testIfBiconomy(
  'instantiate a provider and a contract with Biconomy',
  async () => {
    const { provider, signer, stop } = await createProviderSigner({
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

    const tx = await freeport.issue(10, '0x', { gasLimit: 1e6 });
    const receipt = await tx.wait();
    const event = receipt.events![0];

    expect(event).toBeTruthy();
    expect(event.eventSignature).toBe(
      'TransferSingle(address,address,address,uint256,uint256)'
    );
    expect(event.args!.from).toBe('0x0000000000000000000000000000000000000000');

    stop();
  }
);

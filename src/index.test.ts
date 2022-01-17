import 'dotenv/config';

import {
  createFreeport,
  createProvider,
  Deployment,
  Freeport,
  getFreeportAddress,
} from './index';

const TESTNET_URL = 'https://rpc-mumbai.maticvigil.com';

jest.setTimeout(30e3);

test('instantiate a provider and a contract', async () => {
  const deployment = 'dev' as Deployment;
  const mnemonic = process.env.TESTNET_MNEMONIC;

  const provider = createProvider(TESTNET_URL);
  const contractAddress = await getFreeportAddress(provider, deployment);
  const freeport: Freeport = createFreeport({
    provider,
    contractAddress,
    mnemonic,
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
});

import {
  createFreeport,
  createProvider,
  Deployment,
  Freeport,
  getFreeportAddress,
} from './index';

const TESTNET_URL = 'https://rpc-mumbai.maticvigil.com';

test('instantiate a provider and a contract', async () => {
  const deployment = 'dev' as Deployment;
  const privateKey =
    '0x6be677bd5f9aa0bd9f7b0a7bfc82232b9d6e766f9b1b9d731b2fc1e13806725e';

  const provider = createProvider(TESTNET_URL);
  const contractAddress = await getFreeportAddress(provider, deployment);
  const freeport: Freeport = createFreeport({
    provider,
    contractAddress,
    privateKey,
  });

  const currencyBN = await freeport.CURRENCY();
  const currency = currencyBN.toNumber();
  expect(currency).toBe(0);
});

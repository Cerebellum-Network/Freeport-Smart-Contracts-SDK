## Freeport SDK

### Releases

#### v8.5.0

- Added Treats config

#### v8.4.0

- New method on NftAttachment contract (_collectionManagerAttachToNFT_) for
  attaching assets by Collections.
- Deployed to DEV davinci and DEV liveone

#### v8.3.2

- Include the Liveone prod deployment.

#### v8.3.1

- Include the Davinci prod deployment.

#### v8.3.0

- Include the staging deployments.

#### v8.2.0

- Separate buyNftByUsd and buyNftsByUsd (plural) functions to support multiple
  deployments and upgrades.

#### v8.1.0

- new Marketplace and Auction smart contracts
- added OpenSea compatible Collections
- added 'quantity' parameter for buyNftByUsd method

#### v7.2.0

- Added LiveOne config for STAGE/PROD

#### v7.1.0

- Added LiveOne config

#### v7.0.0 - Upgradeable contracts

- support for upgradeable contracts
- contract deployment of 2022-01-28 / commit bfb19163

#### v6.3.0 - Auction with Biconomy

- [BREAKING] Use the correct SimpleAuction contract.

#### v6.2.0 - Token configuration

- Added Token name and decimals configuration.

#### v6.1.0 - USDC

- Add the USDC contract address on mainnet.

#### v6.0.0 - Biconomy

- Add support for Biconomy for gasless transactions.
- Changes to the API: first create the signer, then the contracts.
- Add first tests.

### Installation

Freeport SDK uses [ethers](https://github.com/ethers-io/ethers.js/) library
under the hood, but it is not included in this package. Install `ethers` as a
dependency in your project along with the SDK:

```
npm install ethers @cere/freeport-sdk
```

or

```
yarn add ethers @cere/freeport-sdk
```

### Usage

Freeport SDK provides an interface to work with
[Freeport Smart Contracts](https://github.com/Cerebellum-Network/Freeport-Smart-Contracts).

In order to call smart contract methods you must create an object with them
using the creator function:

```ts
const fiatGateway = createFiatGateway({ provider, contractAddress, mnemonic });
```

You need to pass a `provider`. You can get a Web3 provider from the browser (if
you use Metamask, for example) or create a JsonRpc provider:

```ts
const provider = importProvider(); // browser
```

```ts
const provider = createProvider(providerUrl); // Node.js
```

You also need to specify `contractAddress`. You can get the current address for
your chain from SDK or get it from configuration params:

```ts
const contractAddress = getFreeportAddress(provider); // browser
```

```ts
const contractAddress = config.get('CONTRACT_ADDRESS'); // Node.js
```

Here is an example of usage in browser:

```ts
const provider = importProvider();
const contractAddress = getFreeportAddress(provider);
const freeport = createFreeport({ provider, contractAddress });

const balance = await freeport.balanceOf(address, nftId);
```

And here is how you can use it without the browser :

```ts
const mnemonic = config.get('WALLET_MNEMONIC');
const providerUrl = config.get('PROVIDER_URL');
const contractAddress = config.get('CONTRACT_ADDRESS');
const provider = createProvider(providerUrl);

const fiatGateway = createFiatGateway({ provider, contractAddress, mnemonic });

await fiatGateway.buyNftFromUsd(...args);
```

## For developers

### Versioning

- update the **major** version if the smart contract addresses change
- also update the major version in case of breaking changes (even if the
  addresses do not change)
- use [`semver`](https://semver.org/) in other cases

### Commands

To run the project in watch mode so that any edits you save inside `src` causes
a rebuild to `/dist`, use `yarn start`.

To do a one-off build, use `yarn build`.

To run tests:

1. Generate a mnemonic (e.g. with Metamask), and get some TEST MATIC on it
   (e.g., from the [faucet](https://faucet.polygon.technology/)).
2. Get an API key of a Biconomy account configured with the Freeport dev
   deployment.
3. Create a `.env` file based on `.env.example`.

- `yarn qa` - run all code quality tools
- `yarn test` - run tests with Jest
- `yarn fix` - fix linting errors and formatting
- `yarn lint` - run ESLint only
- `yarn format` - format files with prettier
- `yarn ts` - run TypeScrypt checks
- `yarn update-types` - generate TS types using artifacts
- `yarn deploy` - publish new version

### Configuration

Code quality is set up for you with `eslint`, `prettier`, `husky`, and
`lint-staged`. Configure your IDE to use them!

### Publishing to NPM

1. Copy smart contract artifacts to `/src/artifacts`
2. Run `yarn update-types`
3. Commit changes with message like _"artifacts from commit e57691bc"_
4. Check that `npm whoami` returns "cere-io" (otherwise update your NPM_TOKEN
   env var for publishing @cere packages)
5. Run `yarn deploy` and publish the next version (see
   [Versioning](https://github.com/Cerebellum-Network/Freeport-Smart-Contracts-SDK#versioning))
6. Push changes to the remote branch
7. Install the new version of SDK in projects that use it

### Continuous Integration

#### GitHub Actions

Two actions are added by default:

- `main` which installs deps with cache, lints, tests, and builds on all pushes
  against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request
  using [`size-limit`](https://github.com/ai/size-limit)

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js`
accordingly.

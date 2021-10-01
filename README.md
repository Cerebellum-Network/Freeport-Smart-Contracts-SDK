## Usage

DaVinci-SDK provides an interface to work with each smart-contract.

In order to call smart-contract methods you have to create an object with them
using the creator function:

```ts
const fiatGateway = createFiatGateway({ provider, contractAddress, mnemonic });
```

You need to create a provider. You can get a Web3 provider from the browser (if
you use for example Metamask) or you can create a JsonRpc provider using
`providerUrl`:

```ts
const provider = importProvider(); // browser
```

```ts
const provider = createProvider(providerUrl); // Node.js
```

You also need to specify `contractAddress`. You can get the current address for
your chain or get it from configuration params:

```ts
const contractAddress = getDavinciAddress(provider); // browser
```

```ts
const contractAddress = config.get('CONTRACT_ADDRESS'); // Node.js
```

Here is an example of usage in browser:

```ts
const provider = importProvider();
const contractAddress = getDavinciAddress(provider);
const davinci = createDavinci({ provider, contractAddress });

const balance = await davinci.balanceOf(address, nftId);
```

And here is for Node.js:

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

- update the major version if the smart contract addresses change
- also update the major version in case of breaking changes (even if the
  addresses do not change)
- use [`semver`](https://semver.org/) in other cases

### Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save
inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Configuration

Code quality is set up for you with `eslint`, `prettier`, `husky`, and
`lint-staged`. Adjust your IDE.

#### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

#### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real
cost of your library with `npm run size` and visualize the bundle with
`npm run analyze`.

#### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple
rollup configs for various module formats and build settings.

#### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as
`react` for `jsx`.

### Continuous Integration

#### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes
  against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request
  using [`size-limit`](https://github.com/ai/size-limit)

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js`
accordingly. Please report if any issues are found.

### Publishing to NPM

You can use [np](https://github.com/sindresorhus/np) just by running
`yarn deploy`

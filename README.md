## Usage

Freeport-SDK provides an interface to work with each smart-contract.

In order to call smart-contract methods you must create an object with them
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

To run the project in watch mode so any edits you save inside `src` causes a
rebuild to `/dist`, use `yarn start`.

To do a one-off build, use `yarn build`.

To run tests, use `yarn test`.

- `yarn qa` - run all code quality tools
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

1. Copy smart-contract artifacts to `/src/artifacts`
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

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes
  against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request
  using [`size-limit`](https://github.com/ai/size-limit)

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js`
accordingly.

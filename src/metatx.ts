import type { UChildERC20 as USDC } from './abi-types';
import {
  BigNumberish,
  ContractTransaction,
  ethers,
  Signer,
  providers,
} from 'ethers';

const domainType = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'verifyingContract', type: 'address' },
  { name: 'salt', type: 'bytes32' },
];

// META_TRANSACTION_TYPEHASH = 0x23d10def3caacba2e4042e0c75d44a42d2558aabcf5ce951d0642a8032e1e653;
// keccak256("MetaTransaction(uint256 nonce,address from,bytes functionSignature)")
const metaTransactionType = [
  { name: 'nonce', type: 'uint256' },
  { name: 'from', type: 'address' },
  { name: 'functionSignature', type: 'bytes' },
];

// INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH = 0x424222bb050a1f7f14017232a5671f2680a2d3420f504bd565cf03035c53198a;
// = keccak256("IncreaseAllowanceWithAuthorization(address owner,address spender,uint256 increment,uint256 validAfter,uint256 validBefore,bytes32 nonce)")
const increaseAllowanceType = [
  { name: 'owner', type: 'address' },
  { name: 'spender', type: 'address' },
  { name: 'increment', type: 'uint256' },
  { name: 'validAfter', type: 'uint256' },
  { name: 'validBefore', type: 'uint256' },
  { name: 'nonce', type: 'bytes32' },
];

export async function approveWithAuthorization(
  provider: providers.JsonRpcProvider,
  usdcContract: USDC,
  owner: string,
  spender: string,
  value: BigNumberish
): Promise<ContractTransaction> {
  const { chainId } = await usdcContract.provider.getNetwork();

  let domain = {
    name: 'USD Coin (PoS)',
    version: '1',
    verifyingContract: usdcContract.address,
    salt: numberToByte32(chainId),
  };

  const objectToSign = {
    types: {
      EIP712Domain: domainType,
      IncreaseAllowanceWithAuthorization: increaseAllowanceType,
    },
    domain,
    primaryType: 'IncreaseAllowanceWithAuthorization',
    message: {
      owner,
      spender,
      increment: value,
      validAfter: 0,
      validBefore: 9999999999, // UNIX seconds forever away.
      nonce: numberToByte32(new Date().getTime()),
    },
  };

  const dataToSign = JSON.stringify(objectToSign);
  let signature = await provider.send('eth_signTypedData_v3', [
    owner,
    dataToSign,
  ]);
  let { r, s, v } = getSignatureParameters(signature);

  return usdcContract.increaseAllowanceWithAuthorization(
    owner,
    spender,
    value,
    objectToSign.message.validBefore,
    objectToSign.message.validAfter,
    objectToSign.message.nonce,
    v,
    r,
    s
  );
}

const getSignatureParameters = (signature) => {
  if (!ethers.utils.isHexString(signature)) {
    throw new Error(
      'Given value "'.concat(signature, '" is not a valid hex string.')
    );
  }
  let r = signature.slice(0, 66);
  let s = '0x'.concat(signature.slice(66, 130));
  let vHex = '0x'.concat(signature.slice(130, 132));
  let v = ethers.BigNumber.from(vHex).toNumber();
  if (![27, 28].includes(v)) v += 27;
  return {
    r: r,
    s: s,
    v: v,
  };
};

const numberToByte32 = (num): string => (
    ethers.utils.hexZeroPad(
        ethers.BigNumber.from(num).toHexString(),
        32
      )
);
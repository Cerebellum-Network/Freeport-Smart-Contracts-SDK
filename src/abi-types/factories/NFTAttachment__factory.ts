/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { NFTAttachment, NFTAttachmentInterface } from '../NFTAttachment';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_nftContract',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'nftId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'cid',
        type: 'bytes32',
      },
    ],
    name: 'AttachToNFT',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'META_TX_FORWARDER',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'forwarder',
        type: 'address',
      },
    ],
    name: 'isTrustedForwarder',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'nftContract',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'nftId',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'cid',
        type: 'bytes32',
      },
    ],
    name: 'attachToNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516109b33803806109b383398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610922806100916000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806301ffc9a71461009e578063248a9ca3146100c65780632f2ff15d146100e757806336568abe146100fc578063572b6c051461010f57806391d14854146101225780639a86e8ce14610135578063a217fddf1461014a578063ab278d1914610152578063d547741f14610165578063d56d229d14610178575b600080fd5b6100b16100ac36600461074d565b6101a3565b60405190151581526020015b60405180910390f35b6100d96100d436600461070a565b6101da565b6040519081526020016100bd565b6100fa6100f5366004610722565b6101ef565b005b6100fa61010a366004610722565b610218565b6100b161011d3660046106f0565b6102ab565b6100b1610130366004610722565b6102c1565b6100d96000805160206108cd83398151915281565b6100d9600081565b6100fa610160366004610775565b6102ea565b6100fa610173366004610722565b61033f565b60015461018b906001600160a01b031681565b6040516001600160a01b0390911681526020016100bd565b60006001600160e01b03198216637965db0b60e01b14806101d457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60009081526020819052604090206001015490565b6101f8826101da565b6102098161020461035e565b610380565b61021383836103e4565b505050565b61022061035e565b6001600160a01b0316816001600160a01b03161461029d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102a78282610469565b5050565b60006101d46000805160206108cd833981519152835b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60006102f461035e565b905082816001600160a01b03167fcb0dbc631188ff7e4c5831ec907b2d9ca2786dd0314af3e43a7269821a19e2b48460405161033291815260200190565b60405180910390a3505050565b610348826101da565b6103548161020461035e565b6102138383610469565b6000610369336102ab565b1561037b575060131936013560601c90565b503390565b61038a82826102c1565b6102a7576103a2816001600160a01b031660146104ec565b6103ad8360206104ec565b6040516020016103be929190610796565b60408051601f198184030181529082905262461bcd60e51b825261029491600401610805565b6103ee82826102c1565b6102a7576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905561042561035e565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61047382826102c1565b156102a7576000828152602081815260408083206001600160a01b03851684529091529020805460ff191690556104a861035e565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b606060006104fb836002610850565b610506906002610838565b6001600160401b0381111561052b57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610555576020820181803683370190505b509050600360fc1b8160008151811061057e57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106105bb57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006105df846002610850565b6105ea906001610838565b90505b600181111561067e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061062c57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061065057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936106778161089f565b90506105ed565b5083156106cd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610294565b9392505050565b80356001600160a01b03811681146106eb57600080fd5b919050565b600060208284031215610701578081fd5b6106cd826106d4565b60006020828403121561071b578081fd5b5035919050565b60008060408385031215610734578081fd5b82359150610744602084016106d4565b90509250929050565b60006020828403121561075e578081fd5b81356001600160e01b0319811681146106cd578182fd5b60008060408385031215610787578182fd5b50508035926020909101359150565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8152600083516107c881601785016020880161086f565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516107f981602884016020880161086f565b01602801949350505050565b602081526000825180602084015261082481604085016020870161086f565b601f01601f19169190910160400192915050565b6000821982111561084b5761084b6108b6565b500190565b600081600019048311821515161561086a5761086a6108b6565b500290565b60005b8381101561088a578181015183820152602001610872565b83811115610899576000848401525b50505050565b6000816108ae576108ae6108b6565b506000190190565b634e487b7160e01b600052601160045260246000fdfe3d2e894c222ba979e2dce2c7d940c0e9bb14306669e9f034eb1bb3979a2069d8a2646970667358221220f3b13b7b58bdbe743297cfa71d680361ad9cd75d6becf3db178aeada4e31c75164736f6c63430008040033';

type NFTAttachmentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTAttachmentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTAttachment__factory extends ContractFactory {
  constructor(...args: NFTAttachmentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _nftContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTAttachment> {
    return super.deploy(
      _nftContract,
      overrides || {}
    ) as Promise<NFTAttachment>;
  }
  getDeployTransaction(
    _nftContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nftContract, overrides || {});
  }
  attach(address: string): NFTAttachment {
    return super.attach(address) as NFTAttachment;
  }
  connect(signer: Signer): NFTAttachment__factory {
    return super.connect(signer) as NFTAttachment__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTAttachmentInterface {
    return new utils.Interface(_abi) as NFTAttachmentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTAttachment {
    return new Contract(address, _abi, signerOrProvider) as NFTAttachment;
  }
}
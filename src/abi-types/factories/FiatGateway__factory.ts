/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { FiatGateway, FiatGatewayInterface } from '../FiatGateway';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract Freeport',
        name: '_freeport',
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cereUnitsPerPenny',
        type: 'uint256',
      },
    ],
    name: 'SetExchangeRate',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CURRENCY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
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
    name: 'EXCHANGE_RATE_ORACLE',
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
    name: 'PAYMENT_SERVICE',
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
    name: 'freeport',
    outputs: [
      {
        internalType: 'contract Freeport',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
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
    inputs: [],
    name: 'totalCereUnitsSent',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'totalPenniesReceived',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
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
        name: '_cereUnitsPerPenny',
        type: 'uint256',
      },
    ],
    name: 'setExchangeRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getExchangeRate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'penniesReceived',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'buyCereFromUsd',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'penniesReceived',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nftId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expectedPriceOrZero',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'buyNftFromUsd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5060405161116b38038061116b83398101604081905261002f9161010d565b600180546001600160a01b0319166001600160a01b03831617905561005b60006100563390565b610061565b5061013b565b61006b828261006f565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661006b576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100c93390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006020828403121561011e578081fd5b81516001600160a01b0381168114610134578182fd5b9392505050565b6110218061014a6000396000f3fe608060405234801561001057600080fd5b50600436106100fc5760003560e01c806301ffc9a714610101578063248a9ca3146101295780632f2ff15d1461014a5780633263ba671461015f57806336568abe146101745780633ccfd60b1461018757806391d148541461018f5780639470ad85146101a25780639c750286146101cd578063a217fddf146101d6578063a87a9322146101de578063bc197c81146101f1578063c4f7f9c514610229578063c87113e21461023c578063d547741f14610251578063db068e0e14610264578063e65372e114610277578063e6aa216c14610280578063f23a6e6114610288578063f5361219146101d6575b600080fd5b61011461010f366004610d2c565b6102a7565b60405190151581526020015b60405180910390f35b61013c610137366004610ce9565b6102c7565b604051908152602001610120565b61015d610158366004610d01565b6102dc565b005b61013c600080516020610fcc83398151915281565b61015d610182366004610d01565b6102fe565b61013c610381565b61011461019d366004610d01565b610488565b6001546101b5906001600160a01b031681565b6040516001600160a01b039091168152602001610120565b61013c60045481565b61013c600081565b61015d6101ec366004610d6c565b6104b1565b6102106101ff366004610be2565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610120565b61013c610237366004610dc3565b6105bb565b61013c600080516020610fac83398151915281565b61015d61025f366004610d01565b6106d9565b61015d610272366004610ce9565b6106f6565b61013c60035481565b60025461013c565b610210610296366004610c87565b63f23a6e6160e01b95945050505050565b60006102b28261074b565b806102c157506102c182610780565b92915050565b60009081526020819052604090206001015490565b6102e5826102c7565b6102ef81336107a5565b6102f98383610809565b505050565b6001600160a01b03811633146103735760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61037d828261088d565b5050565b60008061038e81336107a5565b600033600154604051627eeac760e11b81523060048201526000602482018190529293506001600160a01b039091169062fdd58e9060440160206040518083038186803b1580156103de57600080fd5b505afa1580156103f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104169190610d54565b600154604051637921219560e11b81529192506001600160a01b03169063f242432a9061044e90309086906000908790600401610e66565b600060405180830381600087803b15801561046857600080fd5b505af115801561047c573d6000803e3d6000fd5b50929550505050505090565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020610fcc8339815191526104ca81336107a5565b60006104d78888856105bb565b9050838110156105335760405162461bcd60e51b815260206004820152602160248201527f52656365697665642066657765722043657265207468616e20657870656374656044820152601960fa1b606482015260840161036a565b60018054604051634880d24760e01b81526001600160a01b038a81166004830152898116602483015260448201899052606482018890526084820184905290911690634880d2479060a401600060405180830381600087803b15801561059857600080fd5b505af11580156105ac573d6000803e3d6000fd5b50505050505050505050505050565b6000600080516020610fcc8339815191526105d681336107a5565b6002546106255760405162461bcd60e51b815260206004820181905260248201527f45786368616e67652072617465206d75737420626520636f6e66696775726564604482015260640161036a565b6000600254866106359190610f19565b600154604051637921219560e11b81529192506001600160a01b03169063f242432a9061066d90309089906000908790600401610e66565b600060405180830381600087803b15801561068757600080fd5b505af115801561069b573d6000803e3d6000fd5b5050505085600360008282546106b19190610f01565b9250508190555080600460008282546106ca9190610f01565b90915550909695505050505050565b6106e2826102c7565b6106ec81336107a5565b6102f9838361088d565b600080516020610fac83398151915261070f81336107a5565b60028290556040518281527f1d5de90e7c5b244ac5797698b15fe80a92524d933dafd79e001daf844555fb1c9060200160405180910390a15050565b60006001600160e01b03198216637965db0b60e01b14806102c157506301ffc9a760e01b6001600160e01b03198316146102c1565b60006001600160e01b03198216630271189760e51b14806102c157506102c18261074b565b6107af8282610488565b61037d576107c7816001600160a01b031660146108f2565b6107d28360206108f2565b6040516020016107e3929190610df7565b60408051601f198184030181529082905262461bcd60e51b825261036a91600401610e9e565b6108138282610488565b61037d576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556108493390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6108978282610488565b1561037d576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606000610901836002610f19565b61090c906002610f01565b6001600160401b0381111561093157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561095b576020820181803683370190505b509050600360fc1b8160008151811061098457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106109c157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006109e5846002610f19565b6109f0906001610f01565b90505b6001811115610a84576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610a3257634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610a5657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610a7d81610f68565b90506109f3565b508315610ad35760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161036a565b9392505050565b80356001600160a01b0381168114610af157600080fd5b919050565b600082601f830112610b06578081fd5b813560206001600160401b03821115610b2157610b21610f95565b8160051b610b30828201610ed1565b838152828101908684018388018501891015610b4a578687fd5b8693505b85841015610b6c578035835260019390930192918401918401610b4e565b50979650505050505050565b600082601f830112610b88578081fd5b81356001600160401b03811115610ba157610ba1610f95565b610bb4601f8201601f1916602001610ed1565b818152846020838601011115610bc8578283fd5b816020850160208301379081016020019190915292915050565b600080600080600060a08688031215610bf9578081fd5b610c0286610ada565b9450610c1060208701610ada565b935060408601356001600160401b0380821115610c2b578283fd5b610c3789838a01610af6565b94506060880135915080821115610c4c578283fd5b610c5889838a01610af6565b93506080880135915080821115610c6d578283fd5b50610c7a88828901610b78565b9150509295509295909350565b600080600080600060a08688031215610c9e578081fd5b610ca786610ada565b9450610cb560208701610ada565b9350604086013592506060860135915060808601356001600160401b03811115610cdd578182fd5b610c7a88828901610b78565b600060208284031215610cfa578081fd5b5035919050565b60008060408385031215610d13578182fd5b82359150610d2360208401610ada565b90509250929050565b600060208284031215610d3d578081fd5b81356001600160e01b031981168114610ad3578182fd5b600060208284031215610d65578081fd5b5051919050565b60008060008060008060c08789031215610d84578081fd5b86359550610d9460208801610ada565b9450610da260408801610ada565b9350606087013592506080870135915060a087013590509295509295509295565b600080600060608486031215610dd7578283fd5b83359250610de760208501610ada565b9150604084013590509250925092565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351610e29816017850160208801610f38565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610e5a816028840160208801610f38565b01602801949350505050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6020815260008251806020840152610ebd816040850160208701610f38565b601f01601f19169190910160400192915050565b604051601f8201601f191681016001600160401b0381118282101715610ef957610ef9610f95565b604052919050565b60008219821115610f1457610f14610f7f565b500190565b6000816000190483118215151615610f3357610f33610f7f565b500290565b60005b83811015610f53578181015183820152602001610f3b565b83811115610f62576000848401525b50505050565b600081610f7757610f77610f7f565b506000190190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfef9dcb70efa80ab2e15e6301babe010c481ee550c5335953c9ba3f97789fcb53979fb255b78648c966adc3c680f08ecaf12e124b92265f0bd145ccad7605f092fa264697066735822122040395055252db4fa9a76ee16e14116a48c943b478ef7ac739585978ba039d57b64736f6c63430008040033';

type FiatGatewayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FiatGatewayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FiatGateway__factory extends ContractFactory {
  constructor(...args: FiatGatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _freeport: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FiatGateway> {
    return super.deploy(_freeport, overrides || {}) as Promise<FiatGateway>;
  }
  getDeployTransaction(
    _freeport: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_freeport, overrides || {});
  }
  attach(address: string): FiatGateway {
    return super.attach(address) as FiatGateway;
  }
  connect(signer: Signer): FiatGateway__factory {
    return super.connect(signer) as FiatGateway__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FiatGatewayInterface {
    return new utils.Interface(_abi) as FiatGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FiatGateway {
    return new Contract(address, _abi, signerOrProvider) as FiatGateway;
  }
}

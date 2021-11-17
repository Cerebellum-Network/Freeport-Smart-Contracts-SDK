/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { SimpleAuction, SimpleAuctionInterface } from '../SimpleAuction';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract Davinci',
        name: '_davinci',
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
        name: 'seller',
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
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'closeTimeSec',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
    ],
    name: 'BidOnAuction',
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'seller',
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
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
    ],
    name: 'SettleAuction',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'seller',
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
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'closeTimeSec',
        type: 'uint256',
      },
    ],
    name: 'StartAuction',
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
    inputs: [],
    name: 'davinci',
    outputs: [
      {
        internalType: 'contract Davinci',
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
    inputs: [
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
    ],
    name: 'sellerNftBids',
    outputs: [
      {
        internalType: 'address',
        name: 'buyer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'closeTimeSec',
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
        name: 'nftId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'closeTimeSec',
        type: 'uint256',
      },
    ],
    name: 'startAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
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
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'bidOnAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
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
    ],
    name: 'settleAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506040516115bc3803806115bc83398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b61152b806100916000396000f3fe608060405234801561001057600080fd5b50600436106100db5760003560e01c806301ffc9a7146100e05780630ec57d5114610108578063248a9ca314610133578063297f4eb6146101545780632f2ff15d146101bb57806336568abe146101d05780635138b08c146101e3578063572b6c05146101f657806391d148541461020957806391e078bb1461021c5780639a86e8ce1461022f578063a217fddf14610244578063bc197c811461024c578063d547741f14610284578063ea46d76c14610297578063f23a6e61146102aa578063f536121914610244575b600080fd5b6100f36100ee366004611296565b6102c9565b60405190151581526020015b60405180910390f35b60015461011b906001600160a01b031681565b6040516001600160a01b0390911681526020016100ff565b610146610141366004611253565b6102e9565b6040519081526020016100ff565b6101966101623660046111f8565b600260208181526000938452604080852090915291835291208054600182015491909201546001600160a01b039092169183565b604080516001600160a01b0390941684526020840192909252908201526060016100ff565b6101ce6101c936600461126b565b6102fe565b005b6101ce6101de36600461126b565b610327565b6101ce6101f13660046111f8565b6103ba565b6100f36102043660046110d7565b6106d0565b6100f361021736600461126b565b6106e6565b6101ce61022a3660046112d6565b61070f565b6101466000805160206114d683398151915281565b610146600081565b61026b61025a3660046110f1565b63bc197c8160e01b95945050505050565b6040516001600160e01b031990911681526020016100ff565b6101ce61029236600461126b565b610937565b6101ce6102a5366004611221565b610956565b61026b6102b8366004611196565b63f23a6e6160e01b95945050505050565b60006102d482610bff565b806102e357506102e382610c34565b92915050565b60009081526020819052604090206001015490565b610307826102e9565b61031881610313610c59565b610c7b565b6103228383610cdf565b505050565b61032f610c59565b6001600160a01b0316816001600160a01b0316146103ac5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6103b68282610d64565b5050565b6001600160a01b0382166000908152600260208181526040808420858552909152909120908101546104275760405162461bcd60e51b81526020600482015260166024820152751d1a1948185d58dd1a5bdb881b5d5cdd08195e1a5cdd60521b60448201526064016103a3565b42816002015411156104785760405162461bcd60e51b815260206004820152601a6024820152791d1a1948185d58dd1a5bdb881b5d5cdd0818994818db1bdcd95960321b60448201526064016103a3565b80546001820180546001600160a01b03198316845560009182905560028401919091556001600160a01b0390911690811561061957600154604051637921219560e11b81526001600160a01b039091169063f242432a906104e490309089906000908790600401611370565b600060405180830381600087803b1580156104fe57600080fd5b505af1158015610512573d6000803e3d6000fd5b505060018054604051637921219560e11b81526001600160a01b03909116935063f242432a925061054b91309187918a91600401611370565b600060405180830381600087803b15801561056557600080fd5b505af1158015610579573d6000803e3d6000fd5b505060018054604051630b8bacf160e31b81526001600160a01b038a81166004830152602482018a905260448201879052606482019390935291169250635c5d67889150608401602060405180830381600087803b1580156105da57600080fd5b505af192505050801561060a575060408051601f3d908101601f19168201909252610607918101906112be565b60015b61061357610681565b50610681565b60018054604051637921219560e11b81526001600160a01b039091169163f242432a9161064e9130918a918a91600401611370565b600060405180830381600087803b15801561066857600080fd5b505af115801561067c573d6000803e3d6000fd5b505050505b604080518281526001600160a01b0384811660208301528692908816917ffe2c1531a975fce0584787c5e2643df8c1fe92f870c9dbadb24e366e31e79f44910160405180910390a35050505050565b60006102e36000805160206114d6833981519152835b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6000610719610c59565b6001600160a01b038116600090815260026020818152604080842089855290915290912090810154919250901561078f5760405162461bcd60e51b815260206004820152601a6024820152791d1a1948185d58dd1a5bdb881b5d5cdd081b9bdd08195e1a5cdd60321b60448201526064016103a3565b8242106107ea5760405162461bcd60e51b8152602060048201526024808201527f74686520636c6f73652074696d65206d75737420626520696e207468652066756044820152637475726560e01b60648201526084016103a3565b6000606e6107f9866064611443565b6108039190611423565b9050600081116108675760405162461bcd60e51b815260206004820152602960248201527f746865207374617274696e67207072696365206d75737420626520677265617460448201526806572207468616e20360bc1b60648201526084016103a3565b81546001600160a01b03191682556001808301829055600283018590558054604051637921219560e11b81526001600160a01b039091169163f242432a916108b791879130918c91600401611370565b600060405180830381600087803b1580156108d157600080fd5b505af11580156108e5573d6000803e3d6000fd5b505060408051848152602081018890528993506001600160a01b03871692507f5135842dc9522996ca3d92189d0ded7e70ecbfc5545c115def0c7bdb9ee41f2b910160405180910390a3505050505050565b610940826102e9565b61094c81610313610c59565b6103228383610d64565b6000610960610c59565b6001600160a01b0385166000908152600260208181526040808420888552909152909120908101549192509042106109d55760405162461bcd60e51b81526020600482015260186024820152773a34329030bab1ba34b7b71036bab9ba1031329037b832b760411b60448201526064016103a3565b6109e14261025861140b565b81600201541015610a0857610258816002016000828254610a02919061140b565b90915550505b600181015460006064610a1c83606e611443565b610a269190611423565b905080851015610a935760405162461bcd60e51b815260206004820152603260248201527f61206e657720626964206d757374206265203130252067726561746572207468604482015271185b881d1a194818dd5c9c995b9d08189a5960721b60648201526084016103a3565b82546001600160a01b03168015610b0e57600154604051637921219560e11b81526001600160a01b039091169063f242432a90610adb90309085906000908990600401611370565b600060405180830381600087803b158015610af557600080fd5b505af1158015610b09573d6000803e3d6000fd5b505050505b83546001600160a01b0319166001600160a01b03868116919091178555600180860188905554604051637921219560e11b815291169063f242432a90610b5f90889030906000908c90600401611370565b600060405180830381600087803b158015610b7957600080fd5b505af1158015610b8d573d6000803e3d6000fd5b5050505086886001600160a01b03167f39e9b26db60de3ca88f045fdd8954028f1bbd0c6e2ff124121cb5a03da37019188876002015489604051610bed9392919092835260208301919091526001600160a01b0316604082015260600190565b60405180910390a35050505050505050565b60006001600160e01b03198216637965db0b60e01b14806102e357506301ffc9a760e01b6001600160e01b03198316146102e3565b60006001600160e01b03198216630271189760e51b14806102e357506102e382610bff565b6000610c64336106d0565b15610c76575060131936013560601c90565b503390565b610c8582826106e6565b6103b657610c9d816001600160a01b03166014610de7565b610ca8836020610de7565b604051602001610cb9929190611301565b60408051601f198184030181529082905262461bcd60e51b82526103a3916004016113a8565b610ce982826106e6565b6103b6576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610d20610c59565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610d6e82826106e6565b156103b6576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055610da3610c59565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60606000610df6836002611443565b610e0190600261140b565b6001600160401b03811115610e2657634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610e50576020820181803683370190505b509050600360fc1b81600081518110610e7957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610eb657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000610eda846002611443565b610ee590600161140b565b90505b6001811115610f79576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610f2757634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110610f4b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93610f7281611492565b9050610ee8565b508315610fc85760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103a3565b9392505050565b80356001600160a01b0381168114610fe657600080fd5b919050565b600082601f830112610ffb578081fd5b813560206001600160401b03821115611016576110166114bf565b8160051b6110258282016113db565b83815282810190868401838801850189101561103f578687fd5b8693505b85841015611061578035835260019390930192918401918401611043565b50979650505050505050565b600082601f83011261107d578081fd5b81356001600160401b03811115611096576110966114bf565b6110a9601f8201601f19166020016113db565b8181528460208386010111156110bd578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156110e8578081fd5b610fc882610fcf565b600080600080600060a08688031215611108578081fd5b61111186610fcf565b945061111f60208701610fcf565b935060408601356001600160401b038082111561113a578283fd5b61114689838a01610feb565b9450606088013591508082111561115b578283fd5b61116789838a01610feb565b9350608088013591508082111561117c578283fd5b506111898882890161106d565b9150509295509295909350565b600080600080600060a086880312156111ad578081fd5b6111b686610fcf565b94506111c460208701610fcf565b9350604086013592506060860135915060808601356001600160401b038111156111ec578182fd5b6111898882890161106d565b6000806040838503121561120a578182fd5b61121383610fcf565b946020939093013593505050565b600080600060608486031215611235578283fd5b61123e84610fcf565b95602085013595506040909401359392505050565b600060208284031215611264578081fd5b5035919050565b6000806040838503121561127d578182fd5b8235915061128d60208401610fcf565b90509250929050565b6000602082840312156112a7578081fd5b81356001600160e01b031981168114610fc8578182fd5b6000602082840312156112cf578081fd5b5051919050565b6000806000606084860312156112ea578283fd5b505081359360208301359350604090920135919050565b76020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b815260008351611333816017850160208801611462565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611364816028840160208801611462565b01602801949350505050565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b60208152600082518060208401526113c7816040850160208701611462565b601f01601f19169190910160400192915050565b604051601f8201601f191681016001600160401b0381118282101715611403576114036114bf565b604052919050565b6000821982111561141e5761141e6114a9565b500190565b60008261143e57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561145d5761145d6114a9565b500290565b60005b8381101561147d578181015183820152602001611465565b8381111561148c576000848401525b50505050565b6000816114a1576114a16114a9565b506000190190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe3d2e894c222ba979e2dce2c7d940c0e9bb14306669e9f034eb1bb3979a2069d8a2646970667358221220b778f8d37339bae572e0ccb502840f858dc2e5c824fada4ac153d2088bdde8d464736f6c63430008040033';

type SimpleAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAuction__factory extends ContractFactory {
  constructor(...args: SimpleAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _davinci: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleAuction> {
    return super.deploy(_davinci, overrides || {}) as Promise<SimpleAuction>;
  }
  getDeployTransaction(
    _davinci: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_davinci, overrides || {});
  }
  attach(address: string): SimpleAuction {
    return super.attach(address) as SimpleAuction;
  }
  connect(signer: Signer): SimpleAuction__factory {
    return super.connect(signer) as SimpleAuction__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAuctionInterface {
    return new utils.Interface(_abi) as SimpleAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAuction {
    return new Contract(address, _abi, signerOrProvider) as SimpleAuction;
  }
}

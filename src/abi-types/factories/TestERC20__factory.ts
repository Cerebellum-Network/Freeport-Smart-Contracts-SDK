/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { TestERC20, TestERC20Interface } from '../TestERC20';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50604080518082018252600981526805465737445524332360bc1b602080830191825283518085019094526004845263151154d560e21b90840152815191929161005c91600391610078565b508051610070906004906020840190610078565b50505061014c565b82805461008490610111565b90600052602060002090601f0160209004810192826100a657600085556100ec565b82601f106100bf57805160ff19168380011785556100ec565b828001600101855582156100ec579182015b828111156100ec5782518255916020019190600101906100d1565b506100f89291506100fc565b5090565b5b808211156100f857600081556001016100fd565b600181811c9082168061012557607f821691505b6020821081141561014657634e487b7160e01b600052602260045260246000fd5b50919050565b610abc8061015b6000396000f3fe6080604052600436106100975760003560e01c806306fdde031461009c578063095ea7b3146100c757806318160ddd146100f757806323b872dd14610116578063313ce56714610136578063395093511461015257806340c10f191461017257806370a082311461018757806395d89b41146101bd578063a457c2d7146101d2578063a9059cbb146101f2578063dd62ed3e14610212575b600080fd5b3480156100a857600080fd5b506100b1610258565b6040516100be9190610993565b60405180910390f35b3480156100d357600080fd5b506100e76100e236600461096a565b6102ea565b60405190151581526020016100be565b34801561010357600080fd5b506002545b6040519081526020016100be565b34801561012257600080fd5b506100e761013136600461092f565b610300565b34801561014257600080fd5b50604051600681526020016100be565b34801561015e57600080fd5b506100e761016d36600461096a565b6103b6565b61018561018036600461096a565b6103ed565b005b34801561019357600080fd5b506101086101a23660046108dc565b6001600160a01b031660009081526020819052604090205490565b3480156101c957600080fd5b506100b1610452565b3480156101de57600080fd5b506100e76101ed36600461096a565b610461565b3480156101fe57600080fd5b506100e761020d36600461096a565b6104fc565b34801561021e57600080fd5b5061010861022d3660046108fd565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026790610a15565b80601f016020809104026020016040519081016040528092919081815260200182805461029390610a15565b80156102e05780601f106102b5576101008083540402835291602001916102e0565b820191906000526020600020905b8154815290600101906020018083116102c357829003601f168201915b5050505050905090565b60006102f7338484610509565b50600192915050565b600061030d84848461062d565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103975760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103ab85336103a686856109fe565b610509565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102f79185906103a69086906109e6565b662386f26fc100008111156104445760405162461bcd60e51b815260206004820181905260248201527f43616e206f6e6c79206d696e7420757020746f20313042207065722063616c6c604482015260640161038e565b61044e82826107f3565b5050565b60606004805461026790610a15565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104e35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161038e565b6104f233856103a686856109fe565b5060019392505050565b60006102f733848461062d565b6001600160a01b03831661056b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161038e565b6001600160a01b0382166105cc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161038e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106915760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161038e565b6001600160a01b0382166106f35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161038e565b6001600160a01b0383166000908152602081905260409020548181101561076b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161038e565b61077582826109fe565b6001600160a01b0380861660009081526020819052604080822093909355908516815290812080548492906107ab9084906109e6565b92505081905550826001600160a01b0316846001600160a01b0316600080516020610a67833981519152846040516107e591815260200190565b60405180910390a350505050565b6001600160a01b0382166108495760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161038e565b806002600082825461085b91906109e6565b90915550506001600160a01b038216600090815260208190526040812080548392906108889084906109e6565b90915550506040518181526001600160a01b03831690600090600080516020610a678339815191529060200160405180910390a35050565b80356001600160a01b03811681146108d757600080fd5b919050565b6000602082840312156108ed578081fd5b6108f6826108c0565b9392505050565b6000806040838503121561090f578081fd5b610918836108c0565b9150610926602084016108c0565b90509250929050565b600080600060608486031215610943578081fd5b61094c846108c0565b925061095a602085016108c0565b9150604084013590509250925092565b6000806040838503121561097c578182fd5b610985836108c0565b946020939093013593505050565b6000602080835283518082850152825b818110156109bf578581018301518582016040015282016109a3565b818111156109d05783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156109f9576109f9610a50565b500190565b600082821015610a1057610a10610a50565b500390565b600181811c90821680610a2957607f821691505b60208210811415610a4a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212208bd2b27743267e87c52d3119033d4ede311d75f76ba196eb6bcd9cdc0086436c64736f6c63430008040033';

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC20> {
    return super.deploy(overrides || {}) as Promise<TestERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  MinimalForwarder,
  MinimalForwarderInterface,
} from '../MinimalForwarder';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
    ],
    name: 'getNonce',
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
        components: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'gas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct MinimalForwarder.ForwardRequest',
        name: 'req',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'verify',
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
        components: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'gas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct MinimalForwarder.ForwardRequest',
        name: 'req',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
    payable: true,
  },
];

const _bytecode =
  '0x61012060405234801561001157600080fd5b50604080518082018252601081526f26b4b734b6b0b62337b93bb0b93232b960811b6020808301918252835180850185526005815264302e302e3160d81b908201529151902060c08181527fae209a0b48f21c054280f2455d32cf309387644879d9acbd8ffc19916381188560e08190524660a081815286517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818801819052818901969096526060810193909352608080840192909252308382015286518084039091018152919092019094528351939092019290922090526101005260805160a05160c05160e051610100516109cf610133600039600061055e015260006105ad015260006105880152600061050c0152600061053501526109cf6000f3fe6080604052600436106100345760003560e01c80632d0335ab1461003957806347153f8214610082578063bf5d3bdb146100a3575b600080fd5b34801561004557600080fd5b5061006f61005436600461078c565b6001600160a01b031660009081526020819052604090205490565b6040519081526020015b60405180910390f35b6100956100903660046107ba565b6100d3565b60405161007992919061089e565b3480156100af57600080fd5b506100c36100be3660046107ba565b610280565b6040519015158152602001610079565b600060606100e2858585610280565b61014e5760405162461bcd60e51b815260206004820152603260248201527f4d696e696d616c466f727761726465723a207369676e617475726520646f6573604482015271081b9bdd081b585d18da081c995c5d595cdd60721b60648201526084015b60405180910390fd5b61015d60808601356001610925565b60008061016d602089018961078c565b6001600160a01b03166001600160a01b03168152602001908152602001600020819055506000808660200160208101906101a7919061078c565b6001600160a01b0316606088013560408901356101c760a08b018b6108da565b6101d460208d018d61078c565b6040516020016101e693929190610861565b60408051601f198184030181529082905261020091610882565b600060405180830381858888f193505050503d806000811461023e576040519150601f19603f3d011682016040523d82523d6000602084013e610243565b606091505b509092509050610258603f6060890135610949565b5a1161027457634e487b7160e01b600052600160045260246000fd5b90969095509350505050565b60008061039384848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061038d92507fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e4891506102f0905060208a018a61078c565b61030060408b0160208c0161078c565b60408b013560608c013560808d013561031c60a08f018f6108da565b60405161032a929190610851565b6040805191829003822060208301989098526001600160a01b0396871690820152949093166060850152608084019190915260a083015260c082015260e081019190915261010001604051602081830303815290604052805190602001206103fe565b90610452565b905060808501356000806103aa602089018961078c565b6001600160a01b03166001600160a01b03168152602001908152602001600020541480156103f557506103e0602086018661078c565b6001600160a01b0316816001600160a01b0316145b95945050505050565b600061044c61040b610508565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b60008060008084516041141561047c5750505060208201516040830151606084015160001a6104f2565b8451604014156104aa5750505060408201516020830151906001600160ff1b0381169060ff1c601b016104f2565b60405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610145565b6104fe868285856105fb565b9695505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000046141561055757507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b60006fa2a8918ca85bafe22016d0b997e4df60600160ff1b0382111561066e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610145565b8360ff16601b148061068357508360ff16601c145b6106da5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610145565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa15801561072e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166103f55760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610145565b60006020828403121561079d578081fd5b81356001600160a01b03811681146107b3578182fd5b9392505050565b6000806000604084860312156107ce578182fd5b83356001600160401b03808211156107e4578384fd5b9085019060c082880312156107f7578384fd5b9093506020850135908082111561080c578384fd5b818601915086601f83011261081f578384fd5b81358181111561082d578485fd5b87602082850101111561083e578485fd5b6020830194508093505050509250925092565b8183823760009101908152919050565b8284823760609190911b6001600160601b0319169101908152601401919050565b60008251610894818460208701610969565b9190910192915050565b821515815260406020820152600082518060408401526108c5816060850160208701610969565b601f01601f1916919091016060019392505050565b6000808335601e198436030181126108f0578283fd5b8301803591506001600160401b03821115610909578283fd5b60200191503681900382131561091e57600080fd5b9250929050565b6000821982111561094457634e487b7160e01b81526011600452602481fd5b500190565b60008261096457634e487b7160e01b81526012600452602481fd5b500490565b60005b8381101561098457818101518382015260200161096c565b83811115610993576000848401525b5050505056fea2646970667358221220f24c86659a0f056893d101ccd862f69a8bbe91cfa1aceb71e44e277dbcbc331d64736f6c63430008040033';

type MinimalForwarderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinimalForwarderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinimalForwarder__factory extends ContractFactory {
  constructor(...args: MinimalForwarderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MinimalForwarder> {
    return super.deploy(overrides || {}) as Promise<MinimalForwarder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MinimalForwarder {
    return super.attach(address) as MinimalForwarder;
  }
  connect(signer: Signer): MinimalForwarder__factory {
    return super.connect(signer) as MinimalForwarder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalForwarderInterface {
    return new utils.Interface(_abi) as MinimalForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinimalForwarder {
    return new Contract(address, _abi, signerOrProvider) as MinimalForwarder;
  }
}

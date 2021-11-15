/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from './common';

export type ForwardRequestStruct = {
  from: string;
  to: string;
  value: BigNumberish;
  gas: BigNumberish;
  nonce: BigNumberish;
  data: BytesLike;
};

export type ForwardRequestStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  from: string;
  to: string;
  value: BigNumber;
  gas: BigNumber;
  nonce: BigNumber;
  data: string;
};

export interface BypassForwarderInterface extends ethers.utils.Interface {
  functions: {
    'BYPASS_SENDER()': FunctionFragment;
    'execute((address,address,uint256,uint256,uint256,bytes),bytes)': FunctionFragment;
    'getNonce(address)': FunctionFragment;
    'verify((address,address,uint256,uint256,uint256,bytes),bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'BYPASS_SENDER',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'execute',
    values: [ForwardRequestStruct, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: 'getNonce', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'verify',
    values: [ForwardRequestStruct, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: 'BYPASS_SENDER',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'execute', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getNonce', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'verify', data: BytesLike): Result;

  events: {};
}

export interface BypassForwarder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BypassForwarderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BYPASS_SENDER(overrides?: CallOverrides): Promise<[string]>;

    'BYPASS_SENDER()'(overrides?: CallOverrides): Promise<[string]>;

    execute(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    'execute((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNonce(from: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'getNonce(address)'(
      from: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    verify(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    'verify((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  BYPASS_SENDER(overrides?: CallOverrides): Promise<string>;

  'BYPASS_SENDER()'(overrides?: CallOverrides): Promise<string>;

  execute(
    req: ForwardRequestStruct,
    signature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  'execute((address,address,uint256,uint256,uint256,bytes),bytes)'(
    req: ForwardRequestStruct,
    signature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getNonce(address)'(
    from: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  verify(
    req: ForwardRequestStruct,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  'verify((address,address,uint256,uint256,uint256,bytes),bytes)'(
    req: ForwardRequestStruct,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    BYPASS_SENDER(overrides?: CallOverrides): Promise<string>;

    'BYPASS_SENDER()'(overrides?: CallOverrides): Promise<string>;

    execute(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    'execute((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getNonce(address)'(
      from: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    'verify((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    BYPASS_SENDER(overrides?: CallOverrides): Promise<BigNumber>;

    'BYPASS_SENDER()'(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    'execute((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNonce(from: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getNonce(address)'(
      from: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'verify((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BYPASS_SENDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'BYPASS_SENDER()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    'execute((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNonce(
      from: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getNonce(address)'(
      from: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'verify((address,address,uint256,uint256,uint256,bytes),bytes)'(
      req: ForwardRequestStruct,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
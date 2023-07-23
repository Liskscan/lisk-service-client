/*
 * Copyright © 2023 Liskscan BV.
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */
import { MetaList, ResponseStatus, Success } from "../responses"
import {
  Beddows,
  ExecutionStatus,
  LimitOffset,
  NumberString,
  NumberStringAndFromToNumber,
  Sort,
} from "../../types"

export type TransactionsCall = "transactions"
export type TransactionsCallRPC = "get.transactions"
export type PostTransactionsCallRPC = "post.transactions"
export type PostTransactionsDryRunCallRPC = "post.transactions.dryrun"
export type TransactionsStatisticsCall = "transactions/statistics"
export type TransactionsStatisticsCallRPC = "get.transactions.statistics"

export interface TransactionsParams extends LimitOffset {
  transactionID?: string
  moduleCommand?: string
  senderAddress?: string
  address?: string
  recipientAddress?: string
  blockID?: string
  height?: NumberStringAndFromToNumber
  timestamp?: NumberStringAndFromToNumber
  executionStatus?: ExecutionStatus
  nonce?: string
  sort?: Sort<"timestamp"> | Sort<"height">
  order?: Sort<"index">
}

export interface PostTransactionsParams {
  transaction: string
}
export interface PostTransactionsDryrunParams {
  skipDecode: boolean
  skipVerify: boolean
  transaction:
    | string
    | {
        module: string
        command: string
        fee: NumberString
        nonce: NumberString
        senderPublicKey: string
        signatures: string[]
        params: Record<string, any>
      }
}
export interface TransactionsStatisticsParams extends LimitOffset {
  interval: "day" | "month"
}

export interface PostTransactionsResponse extends ResponseStatus {
  status: Success
  message: string
  transactionID: string
}
export interface PostTransactionsDryrunResponse extends ResponseStatus {
  status: Success
  data: {
    result: number
    status: string
    events: {
      data: any
      index: number
      module: string
      name: string
      topics: string[]
      height: number
    }[]
  }
  meta: {}
}
export interface TransactionsResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    id: string
    moduleCommand: string
    nonce: NumberString
    fee: Beddows
    minFee: Beddows
    size: number
    block: {
      id: string
      height: number
      timestamp: number
      isFinal: boolean
    }
    sender: {
      address: string
      publicKey: string
      name?: string
    }
    params: Record<string, any>
    executionStatus: ExecutionStatus
    index: number
    meta?: {
      recipient: {
        address: string
        publicKey?: string
        name?: string
      }
    }
  }[]
}

export interface TransactionsStatisticsResponse extends ResponseStatus {
  status: Success
  data: {
    distributionByType: Record<string, number>
    distributionByAmount: Record<string, any>
    timeline: Record<
      string,
      {
        timestamp: number
        date: string
        transactionCount: number
        volume: number
      }[]
    >
  }
  meta: {
    count: number
    offset: number
    total: number
    duration: {
      format: string
      from: string
      to: string
    }
  }
}

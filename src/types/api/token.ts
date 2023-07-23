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
import { ResponseStatus, Success } from "../responses"
import { Beddows, LimitOffset, NumberString, Sort } from "../../types"

export type TokenAccountExistCall = "token/account/exist"
export type TokenAccountExistCallRPC = "get.token.account.exist"
export type TokenBalancesCall = "token/balances"
export type TokenBalancesCallRPC = "get.token.balances"
export type TokenConstantsCall = "token/constants"
export type TokenConstantsCallRPC = "get.token.constants"
export type TokenSummaryCall = "token/summary"
export type TokenSummaryCallRPC = "get.token.summary"

export interface TokenAccountExistParams {
  address?: string
  publicKey?: string
  name?: string
  tokenID?: string
}
export interface TokenAvailableIDsParams extends LimitOffset {}
export interface TokenBalancesParams extends LimitOffset {
  address?: string
  tokenID?: string
}
export interface TokenBalancesTopParams extends LimitOffset {
  address?: string
  tokenID?: string
  search?: string
  sort?: Sort<"balance">
}
export type TokenConstantsParams = never
export interface TokenSummaryParams extends LimitOffset {}

export interface TokenAccountExistResponse extends ResponseStatus {
  status: Success
  data: {
    isExists: boolean
  }
  meta: {}
}
export interface TokenBalancesTopResponse extends ResponseStatus {
  status: Success
  data: Record<string, {
    address: string
    publicKey?: string
    name?: string
    balance: Beddows
    knowledge: Record<string, any>
  }[]>
  meta: {
    total: number
    count: number
    offset: number
  }
}
export interface TokenBalancesResponse extends ResponseStatus {
  status: Success
  data: {
    tokenID: string
    availableBalance: Beddows
    lockedBalances: {
      module: string
      amount: Beddows
    }[]
  }
  meta: {
    address: string
    count: number
    offset: number
    total: number
  }
}
export interface TokenConstantsResponse extends ResponseStatus {
  status: Success
  data: {
    extraCommandFees: {
      userAccountInitializationFee: Beddows
      escrowAccountInitializationFee: Beddows
    }
  }
  meta: {}
}
export interface TokenAvailableIDsResponse extends ResponseStatus {
  status: Success
  data: {
    tokenIDs: string[]
  }
  meta: {
    count: number
    offset: number
    total: number
  }
}
export interface TokenSummaryResponse extends ResponseStatus {
  status: Success
  data: {
    escrowedAmounts: {
        escrowChainID: NumberString
        tokenID: NumberString
        amount: Beddows
      }[]
    supportedTokens: {
        isSupportAllTokens: boolean
        patternTokenIDs: string[]
        exactTokenIDs: NumberString[]
      }[]
    totalSupply: {
        tokenID: NumberString
        amount: Beddows
      }[]
  }
  meta: {}
}

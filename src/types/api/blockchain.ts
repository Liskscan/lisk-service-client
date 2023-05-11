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
  ChainID,
  LimitOffset,
  Networks,
  NumberString,
  Sort,
} from "../../types"

export type BlockchainAppsCall = "blockchain/apps"
export type BlockchainAppsCallRPC = "get.blockchain.apps"
export type BlockchainAppsStatisticsCall = "blockchain/apps/statistics"
export type BlockchainAppsStatisticsCallRPC = "get.blockchain.apps.statistics"

export type BlockchainAppsMetaCall = "blockchain/apps/meta"
export type BlockchainAppsMetaCallRPC = "get.blockchain.apps.meta"
export type BlockchainAppsMetaListCall = "blockchain/apps/meta/list"
export type BlockchainAppsMetaListCallRPC = "get.blockchain.apps.meta.list"
export type BlockchainAppsMetaTokensCall = "blockchain/apps/meta/tokens"
export type BlockchainAppsMetaTokensCallRPC = "get.blockchain.apps.meta.tokens"
export type BlockchainAppsMetaTokensSupportedCall =
  "blockchain/apps/meta/tokens/supported"
export type BlockchainAppsMetaTokensSupportedCallRPC =
  "get.blockchain.apps.meta.tokens.supported"

export type BlockchainAppStatus = "registered" | "active" | "terminated"

export interface BlockchainAppsParams extends LimitOffset {
  chainID?: ChainID
  status?: BlockchainAppStatus
  name?: string
  search?: string
}

export type BlockchainAppsStatisticsParams = never

export interface BlockchainAppsMetaParams extends LimitOffset {
  chainName?: string
  chainID?: ChainID
  isDefault?: boolean
  network?: Networks
  search?: string
  sort?: Sort<"chainID"> | Sort<"chainName">
}

export interface BlockchainAppsMetaListParams extends LimitOffset {
  chainName?: string
  network?: Networks
  search?: string
  sort?: Sort<"chainName">
}

export interface BlockchainAppsMetaTokensParams extends LimitOffset {
  chainName?: string
  chainID?: ChainID
  tokenName?: string
  tokenID?: string
  network?: Networks
  search?: string
  sort?: Sort<"chainName">
}

export interface BlockchainAppsMetaTokensSupportedParams extends LimitOffset {
  chainID?: ChainID
  sort?: Sort<"tokenID">
}

export interface BlockchainAppsResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    name: string
    chainID: ChainID
    status: BlockchainAppStatus
    address: string
    lastCertificateHeight: number
    lastUpdated: number
    escrow: {
      tokenID: NumberString
      amount: Beddows
    }[]
  }[]
}

export interface BlockchainAppsStatisticsResponse extends ResponseStatus {
  status: Success
  data: {
    registered: number
    active: number
    terminated: number
    totalSupplyLSK: NumberString
    totalStakedLSK: NumberString
    currentAnnualInflationRate: string
  }
  meta: {}
}

export interface BlockchainAppsMetaResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    chainName: string
    chainID: ChainID
    title: string
    status: BlockchainAppStatus
    description: string
    networkType: Networks
    isDefault: boolean
    genesisURL: string
    projectPage: string
    serviceURLs: {
      http: string
      ws: string
    }[]
    logo: {
      png: string
      svg: string
    }
    appPage: string
    backgroundColor: string
    explorers: {
      url: string
      txnPage: string
    }[]
    appNodes: {
      url: string
      maintainer: string
    }[]
  }[]
}

export interface BlockchainAppsMetaListResponse
  extends ResponseStatus,
    MetaList {
  status: Success
  data: {
    chainName: string
    chainID: ChainID
    networkType: Networks
  }[]
}

export interface BlockchainAppsMetaTokensResponse
  extends ResponseStatus,
    MetaList {
  status: Success
  data: {
    chainID: ChainID
    chainName: string
    tokenID: NumberString
    tokenName: string
    networkType: Networks
    description: string
    denomUnits: {
      denom: string
      decimals: number
      aliases: string[]
    }[]
    symbol: string
    displayDenom: string
    baseDenom: string
    logo: {
      png: string
      svg: string
    }
  }[]
}

export interface BlockchainAppsMetaTokensSupportedResponse
  extends ResponseStatus,
    MetaList {
  status: Success
  data: {
    chainID: ChainID
    chainName: string
    tokenID: NumberString
    tokenName: string
    networkType: Networks
    description: string
    denomUnits: {
      denom: string
      decimals: number
      aliases: string[]
    }[]
    symbol: string
    displayDenom: string
    baseDenom: string
    logo: {
      png: string
      svg: string
    }
  }[]
}

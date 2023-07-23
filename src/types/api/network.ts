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
  AmountEntry,
  LimitOffset,
  NumberString,
  NumberStringAndFromToNumber,
  Sort
} from "../../types"

export type NetworkPeersCall = "network/peers"
export type NetworkPeersCallRPC = "get.network.peers"
export type NetworkStatisticsCall = "network/statistics"
export type NetworkStatisticsCallRPC = "get.network.statistics"
export type NetworkStatusCall = "network/status"
export type NetworkStatusCallRPC = "get.network.status"

export interface NetworkPeersParams extends LimitOffset {
  ip?: string
  networkVersion?: string
  state?: string
  height?: NumberStringAndFromToNumber
  sort?: Sort<"height"> | Sort<"networkVersion">
}

export type NetworkStatisticsParams = undefined
export type NetworkStatusParams = undefined

export interface NetworkPeersResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    ip: string
    port: number
    networkVersion: string
    chainID?: NumberString
    state: string
    height?: number
    location?: {
      countryCode?: string
      countryName?: string
      hostname?: string
      latitude?: string
      longitude?: string
    }
  }[]
}

export interface NetworkStatisticsResponse extends ResponseStatus {
  status: Success
  data: {
    basic: {
      connectedPeers: number
      disconnectedPeers: number
      totalPeers: number
    }
    height: Record<string, number>
    networkVersion: Record<string, number>
    totalLocked: AmountEntry[]
    totalStaked: AmountEntry
    totalSelfStaked: AmountEntry
  }
}

export interface NetworkStatusResponse extends ResponseStatus {
  status: Success
  data: {
    version: string
    networkVersion: string
    chainID: NumberString
    lastBlockID: string
    height: number
    finalizedHeight: number
    syncing: boolean
    unconfirmedTransactions: number
    genesis: {
      block: {
        fromFile: string
      }
      blockTime: number
      chainID: NumberString
      maxTransactionsSize: number
      bftBatchSize: number
    }
    genesisHeight: number
    registeredModules: string[]
    moduleCommands: string[]
    network: {
      version: string
      port: number
      seedPeers: {
        ip: string
        port: number
      }[]
    }
  }
  meta: {
    lastUpdate: number
    lastBlockHeight: number
    lastBlockID: string
  }
}

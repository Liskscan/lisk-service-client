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
import { LimitOffset, NumberStringAndFromToNumber, Sort } from "../../types"

export type BlocksCall = "blocks"
export type BlocksCallRPC = "get.blocks"
export type BlocksAssetsCall = "blocks/assets"
export type BlocksAssetsCallRPC = "get.blocks.assets"

export interface BlocksParams extends LimitOffset {
  blockID?: string
  height?: NumberStringAndFromToNumber
  timestamp?: NumberStringAndFromToNumber
  generatorAddress?: string
  sort?: Sort<"height"> | Sort<"timestamp">
}

export interface BlocksAssetsParams extends LimitOffset {
  blockID?: string
  height?: NumberStringAndFromToNumber
  timestamp?: NumberStringAndFromToNumber
  module?: string
  sort?: Sort<"height"> | Sort<"timestamp">
}

export interface Block {
  id: string
  version: number
  height: number
  timestamp: number
  previousBlockId: string
  generator: {
    address: string
    name: string
    publicKey: string
  }
  transactionRoot: string
  assetsRoot: string
  stateRoot: string
  maxHeightGenerated: number
  maxHeightPrevoted: number
  validatorsHash: string
  aggregateCommit: {
    height: number
    aggregationBits: string
    certificateSignature: string
  }
  numberOfTransactions: number
  numberOfAssets: number
  numberOfEvents: number
  totalBurnt: string
  networkFee: string
  totalForged: string
  reward: string
  signature: string
  isFinal: boolean
}

export interface BlocksResponse extends ResponseStatus {
  status: Success
  data: Block[]
  meta: {
    count: number
    offset: number
    total: number
  }
}

export interface BlocksAssetsResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    block: {
      id: string
      height: number
      timestamp: number
    }
    assets: {
      module: string
      data: any
    }[]
  }[]
}

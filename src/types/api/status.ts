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

export type IndexStatusCall = "index/status"
export type IndexStatusCallRPC = "get.index.status"

export type IndexStatusParams = undefined

export interface IndexStatusResponse extends ResponseStatus {
  status: Success
  data: {
    genesisHeight: number
    lastBlockHeight: number
    lastIndexedBlockHeight: number
    chainLength: number
    numBlocksIndexed: number
    percentageIndexed: number
    isIndexingInProgress: boolean
  }
  meta: {
    lastUpdate: number
  }
}

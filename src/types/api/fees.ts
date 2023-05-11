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
import { NumberString } from "../../types"

export type FeesCall = "fees"
export type FeesCallRPC = "get.fees"

export type FeesParams = undefined

export interface FeesResponse extends ResponseStatus {
  status: Success
  data: {
    feeEstimatePerByte: {
      low: number
      medium: number
      high: number
    }
    feeTokenID: NumberString
    minFeePerByte: number
  }
  meta: {
    lastUpdate: number
    lastBlockHeight: number
    lastBlockID: string
  }
}

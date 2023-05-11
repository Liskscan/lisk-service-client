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

export type MarketPricesCall = "market/prices"
export type MarketPricesCallRPC = "get.market.prices"

export type MarketPricesParams = undefined

export interface MarketPricesResponse extends ResponseStatus {
  status: Success
  data: {
    code: string
    from: string
    rate: string
    to: string
    sources: string[]
    updateTimestamp: number
  }[]
  meta: {
    count: number
  }
}

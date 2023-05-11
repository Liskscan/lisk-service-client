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

export type EventsCall = "events"
export type EventsCallRPC = "get.events"

export interface EventsParams extends LimitOffset {
  transactionID?: string
  senderAddress?: string
  topic?: string
  blockID?: string
  height?: NumberStringAndFromToNumber
  timestamp?: NumberStringAndFromToNumber
  sort?: Sort<"height"> | Sort<"timestamp">
  order?: Sort<"index">
}

export interface EventsResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    id: string
    module: string
    name: string
    data: Record<string, string | number | boolean>
    topics: string[]
    index: number
    block: {
      id: string
      height: number
      timestamp: number
    }
  }[]
}

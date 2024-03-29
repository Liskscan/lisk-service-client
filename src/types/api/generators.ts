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
import { LimitOffset } from "../../types"

export type GeneratorsCall = "generators"
export type GeneratorsCallRPC = "get.generators"

export interface GeneratorsParams extends LimitOffset {
  search?: string
}

export interface GeneratorsResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    address: string
    name: string
    publicKey: string
    nextAllocatedTime: number
    status: string
  }[]
}

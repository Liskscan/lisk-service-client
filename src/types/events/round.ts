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
import { ResponseStatus } from "../responses"

export type UpdateRound = "update.round"
export interface RoundChangeEvent extends ResponseStatus {
  data: {
    address: string
    name: string
    publicKey: string
    nextAllocatedTime: number
    status: string
  }[]
  meta: {
    count: number
    offset: number
    total: number
  }
}

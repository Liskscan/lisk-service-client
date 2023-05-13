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
export type Success = "success"
export type Error = "error"
export type ResponseStatus = {
  status: Error | Success
  error?: boolean
  data?: {}[]
  meta?: {}
}

export interface ErrorResponse extends ResponseStatus {
  status: Error
  error: boolean
  message: string
}

export interface MetaList {
  meta: {
    count: number
    offset: number
    total: number
  }
}

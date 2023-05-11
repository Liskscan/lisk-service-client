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

export type InvokeCall = "invoke"
export type InvokeCallRPC = "post.invoke"

export interface InvokeParams {
  endpoint: string
  params?: any
}

export interface InvokeResponse extends ResponseStatus {
  status: Success
  data: any
  meta: {
    endpoint: string
    params: any
  }
}

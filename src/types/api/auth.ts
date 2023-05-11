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

export type AuthCall = "auth"
export type AuthCallRPC = "get.auth"

export interface AuthParams {
  address: string
}

export interface AuthResponse extends ResponseStatus {
  status: Success
  data: {
    nonce: string
    numberOfReqSignatures: number
    mandatoryKeys: string[]
    optionalKeys: string[]
  }
  meta: {
    address: string
    publicKey: string
    name: string
  }
}

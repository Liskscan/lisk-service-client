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
import { ErrorResponse } from "./types/responses"
import { Calls, CallsRPC, CallTypes, CallTypesRPC } from "./types/api"
import { Events, EventsMethodResponses } from "./types/events"

export type FromToNumber = `${number}:${number}`
export type NumberString = `${number}`
export type Beddows = `${number}`
export type NumberStringAndFromToNumber = NumberString | FromToNumber
export type Sort<T extends string> = `${T}:asc` | `${T}:desc`
export interface LimitOffset {
  limit?: number
  offset?: number
}
export type ChainID = NumberString
export type Networks = "mainnet" | "testnet" | "betanet" | "alphanet" | "devnet"
export type ExecutionStatus = "pending" | "success" | "fail"

export type LiskServiceClient = <T extends Calls>(
  call: T,
  params?: CallTypes[T]["params"]
) => Promise<CallTypes[T]["response"] | ErrorResponse>

export type LiskWSServiceClient = <T extends CallsRPC>(
  call: T,
  params?: CallTypesRPC[T]["params"]
) => Promise<CallTypesRPC[T]["response"] | ErrorResponse>

export type LiskWSEvent = <T extends Events>(
  method: T,
  listener: (data: EventsMethodResponses[T]["response"]) => void
) => void

export interface LiskServiceProps {
  url: string
  disableTLS?: boolean
  disableWS?: boolean
  disableEvents?: boolean
}

export interface LiskServiceClass {
  wsUrl?: string
  apiUrl?: string
  socket?: any
  blockchain?: any
  noEvents?: boolean
  timeout: number

  get: LiskServiceClient
  rpc: LiskWSServiceClient
  subscribe: LiskWSEvent
  _initSocketConnection: () => Promise<void>
}

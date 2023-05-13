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
import { io } from "socket.io-client"
import {
  CallsRPC,
  CallTypesRPC,
  ErrorResponse,
  LiskServiceClass,
  LiskServiceClient,
  LiskServiceProps,
  LiskWSEvent,
  LiskWSServiceClient,
} from "./types"

export * from "./types"

export class LiskService implements LiskServiceClass {
  wsUrl
  apiUrl
  socket: any
  blockchain: any
  noEvents = true
  timeout = new Date().getTime() + 15000

  constructor({
    url,
    disableTLS = false,
    disableWS = false,
    disableEvents = false,
  }: LiskServiceProps) {
    this.apiUrl = `${disableTLS ? "http" : "https"}://${url}/api/v3/`
    this.wsUrl = !disableWS
      ? `${disableTLS ? "ws" : "wss"}://${url}/`
      : undefined
    this.noEvents = disableWS || disableEvents
    if (!disableWS) {
      this.timeout = new Date().getTime() + 15000
      this._initSocketConnection()
    }
  }

  get: LiskServiceClient = async (call, params) => {
    try {
      const response = await fetch(
        `${this.apiUrl}${call}${
          params
            ? `?${new URLSearchParams(params as Record<string, string>)}`
            : ""
        }`
      )
      const result = await response.json()
      result.status = "success"
      if (result.error) {
        result.status = "error"
      }
      return result
    } catch (e) {
      return {
        status: "error",
        message: e,
        error: true,
      }
    }
  }

  rpc: LiskWSServiceClient = async (call, params) => {
    if (!this.socket?.connected) {
      if (new Date().getTime() > this.timeout) {
        return {
          error: true,
          status: "error",
          message: `Time out 15000ms couldn't establish an websocket connection with ${this.wsUrl}`,
        }
      }
      return new Promise((resolve) =>
        setTimeout(async () => resolve(await this.rpc(call, params)), 50)
      ) as Promise<ErrorResponse | CallTypesRPC[CallsRPC]["response"]>
    }
    try {
      return new Promise((resolve, reject) => {
        this.socket.emit(
          "request",
          {
            jsonrpc: "2.0",
            id: 1,
            method: call,
            params,
          },
          (response: any) => {
            if (response.result) {
              resolve({
                status: "success",
                ...response.result,
              })
            } else {
              resolve({
                status: "error",
                error: true,
                message: response.error.message,
              })
            }
          }
        )
        setTimeout(() => reject("Timed out!"), 5000)
      }).catch((e) => {
        return {
          status: "error",
          error: true,
          message: e.message,
        } as ErrorResponse
      }) as Promise<ErrorResponse | CallTypesRPC[CallsRPC]["response"]>
    } catch (e) {
      return {
        status: "error",
        error: true,
        message: e,
      } as ErrorResponse
    }
  }

  subscribe: LiskWSEvent = (method, listener) => {
    if (this.noEvents) {
      throw Error(
        "No events listener found to subscribe, set `noEvents` to `false`"
      )
    }
    if (!this.blockchain.connected) {
      setTimeout(() => this.subscribe(method, listener), 100)
    }
    this.blockchain.on(method, ({ data, meta }: { data: any[]; meta: any }) => {
      listener({
        status: "success",
        data,
        meta,
      })
    })
  }

  _initSocketConnection = async () => {
    this.socket = io(`${this.wsUrl}rpc-v3`, { transports: ["websocket"] })
    if (!this.noEvents) {
      this.blockchain = io(`${this.wsUrl}blockchain`, {
        transports: ["websocket"],
      })
    }
  }
}

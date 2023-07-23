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

export type ExportDownloadCall = "export/download"
export type ExportDownloadCallRPC = "get.export.download"
export type ExportTransactionsCall = "export/transactions"
export type ExportTransactionsCallRPC = "get.export.transactions"

export interface ExportDownloadParams {
  filename?: string
}

export interface ExportTransactionsParams {
  address?: string
  publicKey?: string
  interval?: `${string}-${string}-${string}:${string}-${string}-${string}`
}

export interface ExportDownloadResponse extends ResponseStatus {
  status: Success
}

export interface ExportTransactionsResponse extends ResponseStatus {
  status: Success
  data: {
    address: string
    publicKey: string
    interval: string
    fileName: string
    fileUrl: string
  }
  meta: {
    ready: boolean
  }
  links: {}
}

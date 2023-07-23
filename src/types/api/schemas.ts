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

export type SchemasCall = "schemas"
export type SchemasCallRPC = "get.schemas"

export type SchemasParams = never

export type Schema = {
  $id: string
  type: string
  properties: Record<string, Record<string, any>>
  required: string[]
}
export type Messages = { moduleCommand: string; params: string; schema: Schema }
export type Command = { moduleCommand: string; schema: Schema }
export type Assets = { module: string; version: string; schema: Schema }
export type Events = { module: string; name: string; schema: Schema }
export interface SchemasResponse extends ResponseStatus {
  status: Success
  data: {
    block: {schema: Schema}
    header: {schema: Schema}
    asset: {schema: Schema}
    transaction: {schema: Schema}
    event: {schema: Schema}
    standardEvent: {schema: Schema}
    ccm: {schema: Schema}
    events: Events[]
    assets: Assets[]
    commands: Command[]
    messages: Messages[]
  }
  meta: {}
}

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
import { DeleteBlock, NewBlock } from "./block"
import { DeleteTransactions, NewTransactions } from "./transactions"
import { RoundChangeEvent, UpdateRound } from "./round"
import { UpdateGenerators } from "./generators"
import { UpdateFeeEstimates } from "./fees"
import { MetaDataChangeEvent, UpdateMetaData } from "./metadata"
import { FeesResponse } from "../api/fees"
import { GeneratorsResponse } from "../api/generators"
import { TransactionsResponse } from "../api/transactions"
import { BlocksResponse } from "../api/blocks"

export type Events =
  | NewBlock
  | DeleteBlock
  | NewTransactions
  | DeleteTransactions
  | UpdateRound
  | UpdateGenerators
  | UpdateFeeEstimates
  | UpdateMetaData

export type EventsResponses =
  | BlocksResponse
  | TransactionsResponse
  | GeneratorsResponse
  | FeesResponse
  | RoundChangeEvent
  | MetaDataChangeEvent

export type EventsMethodResponses = {
  "new.block": { response: BlocksResponse }
  "delete.block": { response: BlocksResponse }
  "new.transactions": { response: TransactionsResponse }
  "delete.transactions": { response: TransactionsResponse }
  "update.generators": { response: GeneratorsResponse }
  "update.fees_estimates": { response: FeesResponse }
  "update.round": { response: RoundChangeEvent }
  "update.metadata": { response: MetaDataChangeEvent }
}

export {
  NewBlock,
  DeleteBlock,
  NewTransactions,
  DeleteTransactions,
  UpdateRound,
  UpdateGenerators,
  UpdateFeeEstimates,
  UpdateMetaData,
  RoundChangeEvent,
  MetaDataChangeEvent,
}

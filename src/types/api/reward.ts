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
import { Beddows, NumberString } from "../../types"

export type RewardAnnualInflationCall = "reward/annual-inflation"
export type RewardAnnualInflationCallRPC = "get.reward.annual-inflation"
export type RewardConstantsCall = "reward/constants"
export type RewardConstantsCallRPC = "get.reward.constants"
export type RewardDefaultCall = "reward/default"
export type RewardDefaultCallRPC = "get.reward.default"

export interface RewardAnnualInflationParams {
  height: number
}
export type RewardConstantsParams = never
export interface RewardDefaultParams {
  height: number
}
export interface RewardAnnualInflationResponse extends ResponseStatus {
  status: Success
  data: {
    tokenID: NumberString
    rate: string
  }
  meta: {}
}
export interface RewardConstantsResponse extends ResponseStatus {
  status: Success
  data: {
    rewardTokenID: NumberString
  }
  meta: {}
}
export interface RewardDefaultResponse extends ResponseStatus {
  status: Success
  data: {
    tokenID: NumberString
    defaultReward: Beddows
  }
  meta: {}
}

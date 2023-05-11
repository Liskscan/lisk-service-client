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
import { MetaList, ResponseStatus, Success } from "../responses"
import { Beddows, LimitOffset, NumberString, Sort } from "../../types"

export type PoSRewardsClaimableCall = "pos/rewards/claimable"
export type PoSRewardsClaimableCallRPC = "get.pos.rewards.claimable"
export type PoSRewardsLockedCall = "pos/rewards/locked"
export type PoSRewardsLockedCallRPC = "get.pos.rewards.locked"
export type PoSConstantsCall = "pos/constants"
export type PoSConstantsCallRPC = "get.pos.constants"
export type PoSStakersCall = "pos/stakers"
export type PoSStakersCallRPC = "get.pos.stakers"
export type PoSStakesCall = "pos/stakes"
export type PoSStakesCallRPC = "get.pos.stakes"
export type PoSUnlocksCall = "pos/unlocks"
export type PoSUnlocksCallRPC = "get.pos.unlocks"
export type PoSValidatorsCall = "pos/validators"
export type PoSValidatorsCallRPC = "get.pos.validators"

export interface PoSRewardsClaimableParams extends LimitOffset {
  address?: string
  publicKey?: string
  name?: string
}

export interface PoSRewardsLockedParams extends LimitOffset {
  address?: string
  publicKey?: string
  name?: string
}

export type PoSConstantsParams = undefined

export interface PoSStakersParams extends LimitOffset {
  address?: string
  publicKey?: string
  name?: string
  search?: string
}

export interface PoSStakesParams {
  address?: string
  publicKey?: string
  name?: string
  search?: string
}

export interface PoSUnlocksParams extends LimitOffset {
  address?: string
  publicKey?: string
  name?: string
  isLocked?: boolean
}

export interface PoSValidatorsParams extends LimitOffset {
  address?: string
  publicKey?: string
  name?: string
  status?: string
  search?: string
  sort?:
    | Sort<"commission">
    | Sort<"validatorWeight">
    | Sort<"rank">
    | Sort<"name">
}

export interface PoSRewardsClaimableResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    tokenID: NumberString
    reward: Beddows
  }[]
}

export interface PoSRewardsLockedResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    tokenID: NumberString
    reward: Beddows
  }[]
}

export interface PoSConstantsResponse extends ResponseStatus {
  status: Success
  data: {
    factorSelfStakes: number
    maxLengthName: number
    maxNumberSentStakes: number
    maxNumberPendingUnlocks: number
    failSafeMissedBlocks: number
    failSafeInactiveWindow: number
    punishmentWindow: number
    roundLength: number
    minWeightStandby: Beddows
    numberActiveValidators: number
    numberStandbyDelegates: number
    posTokenID: NumberString
    maxBFTWeightCap: number
    commissionIncreasePeriod: number
    maxCommissionIncreaseRate: number
    extraCommandFees: {
      validatorRegistrationFee: Beddows
    }
  }
  meta: {}
}

export interface PoSStakersResponse extends ResponseStatus {
  status: Success
  data: {
    stakers: {
      address: string
      amount: Beddows
      name: string
    }[]
  }
  meta: {
    validator: {
      address: string
      publicKey: string
      name: string
    }
    count: number
    offset: number
    total: number
  }
}

export interface PoSStakesResponse extends ResponseStatus {
  status: Success
  data: {
    stakes: {
      address: string
      amount: Beddows
      name: string
    }[]
  }
  meta: {
    staker: {
      address: string
      publicKey: string
      name: string
    }
    count: number
  }
}

export interface PoSUnlocksResponse extends ResponseStatus {
  status: Success
  data: {
    address: string
    publicKey: string
    name: string
    pendingUnlocks: {
      validatorAddress: string
      amount: Beddows
      tokenID: NumberString
      unstakeHeight: number
      expectedUnlockableHeight: number
      isLocked: boolean
    }[]
  }
}

export interface PoSValidatorsResponse extends ResponseStatus, MetaList {
  status: Success
  data: {
    name: string
    totalStake: Beddows
    selfStake: Beddows
    validatorWeight: Beddows
    address: string
    publicKey: string
    lastGeneratedHeight: number
    status: string
    isBanned: boolean
    reportMisbehaviorHeights: number[]
    punishmentPeriods: {
      start: number
      end: number
    }[]
    consecutiveMissedBlocks: number
    commission: number
    lastCommissionIncreaseHeight: number
    sharingCoefficients: {
      tokenID: NumberString
      coefficient: string
    }[]
    rank: number
    generatedBlocks: number
    totalCommission: Beddows
    totalSelfStakeRewards: Beddows
    earnedRewards: Beddows
  }[]
}

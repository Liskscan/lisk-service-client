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
import { AuthCall, AuthCallRPC, AuthParams, AuthResponse } from "./auth"
import {
  BlocksAssetsCall,
  BlocksAssetsCallRPC,
  BlocksAssetsParams,
  BlocksAssetsResponse,
  BlocksCall,
  BlocksCallRPC,
  BlocksParams,
  BlocksResponse,
} from "./blocks"
import {
  BlockchainAppsCall,
  BlockchainAppsCallRPC,
  BlockchainAppsMetaCall,
  BlockchainAppsMetaCallRPC,
  BlockchainAppsMetaListCall,
  BlockchainAppsMetaListCallRPC,
  BlockchainAppsMetaListParams,
  BlockchainAppsMetaListResponse,
  BlockchainAppsMetaParams,
  BlockchainAppsMetaResponse,
  BlockchainAppsMetaTokensCall,
  BlockchainAppsMetaTokensCallRPC,
  BlockchainAppsMetaTokensParams,
  BlockchainAppsMetaTokensResponse,
  BlockchainAppsMetaTokensSupportedCall,
  BlockchainAppsMetaTokensSupportedCallRPC,
  BlockchainAppsMetaTokensSupportedParams,
  BlockchainAppsMetaTokensSupportedResponse,
  BlockchainAppsParams,
  BlockchainAppsResponse,
  BlockchainAppsStatisticsCall,
  BlockchainAppsStatisticsCallRPC,
  BlockchainAppsStatisticsParams,
  BlockchainAppsStatisticsResponse,
} from "./blockchain"
import { ErrorResponse } from "../responses"
import {
  EventsCall,
  EventsCallRPC,
  EventsParams,
  EventsResponse,
} from "./events"
import {
  ExportTransactionsCall,
  ExportTransactionsCallRPC,
  ExportTransactionsParams,
  ExportTransactionsResponse,
} from "./export"
import { FeesCall, FeesCallRPC, FeesParams, FeesResponse } from "./fees"
import {
  GeneratorsCall,
  GeneratorsCallRPC,
  GeneratorsResponse,
} from "./generators"
import {
  InvokeCall,
  InvokeCallRPC,
  InvokeParams,
  InvokeResponse,
} from "./invoke"
import {
  LegacyCall,
  LegacyCallRPC,
  LegacyParams,
  LegacyResponse,
} from "./legacy"
import {
  MarketPricesCall,
  MarketPricesCallRPC,
  MarketPricesParams,
  MarketPricesResponse,
} from "./market"
import {
  NetworkPeersCall,
  NetworkPeersCallRPC,
  NetworkPeersParams,
  NetworkPeersResponse,
  NetworkStatisticsCall,
  NetworkStatisticsCallRPC,
  NetworkStatisticsParams,
  NetworkStatisticsResponse,
  NetworkStatusCall,
  NetworkStatusCallRPC,
  NetworkStatusParams,
  NetworkStatusResponse,
} from "./network"
import {
  IndexStatusCall,
  IndexStatusCallRPC,
  IndexStatusParams,
  IndexStatusResponse,
} from "./status"
import {
  PoSConstantsCall,
  PoSConstantsCallRPC,
  PoSConstantsParams,
  PoSConstantsResponse,
  PoSRewardsClaimableCall,
  PoSRewardsClaimableCallRPC,
  PoSRewardsClaimableParams,
  PoSRewardsClaimableResponse,
  PoSRewardsLockedCall,
  PoSRewardsLockedCallRPC,
  PoSRewardsLockedParams,
  PoSRewardsLockedResponse,
  PoSStakersCall,
  PoSStakersCallRPC,
  PoSStakersParams,
  PoSStakersResponse,
  PoSStakesCall,
  PoSStakesCallRPC,
  PoSStakesParams,
  PoSStakesResponse,
  PoSUnlocksCall,
  PoSUnlocksCallRPC,
  PoSUnlocksParams,
  PoSUnlocksResponse,
  PoSValidatorsCall,
  PoSValidatorsCallRPC,
  PoSValidatorsParams,
  PoSValidatorsResponse,
} from "./pos"
import {
  RewardAnnualInflationCall,
  RewardAnnualInflationCallRPC,
  RewardAnnualInflationParams,
  RewardAnnualInflationResponse,
  RewardConstantsCall,
  RewardConstantsCallRPC,
  RewardConstantsParams,
  RewardConstantsResponse,
  RewardDefaultCall,
  RewardDefaultCallRPC,
  RewardDefaultParams,
  RewardDefaultResponse,
} from "./reward"
import {
  SchemasCall,
  SchemasCallRPC,
  SchemasParams,
  SchemasResponse,
} from "./schemas"
import {
  TokenAccountExistCall,
  TokenAccountExistCallRPC,
  TokenAccountExistParams,
  TokenAccountExistResponse,
  TokenBalancesCall,
  TokenBalancesCallRPC,
  TokenBalancesParams,
  TokenBalancesResponse,
  TokenConstantsCall,
  TokenConstantsCallRPC,
  TokenConstantsParams,
  TokenConstantsResponse,
  TokenSummaryCall,
  TokenSummaryCallRPC,
  TokenSummaryParams,
  TokenSummaryResponse,
} from "./token"
import {
  PostTransactionsCallRPC,
  PostTransactionsDryRunCallRPC,
  PostTransactionsDryrunResponse,
  PostTransactionsParams,
  PostTransactionsResponse,
  TransactionsCall,
  TransactionsCallRPC,
  TransactionsParams,
  TransactionsResponse,
  TransactionsStatisticsCall,
  TransactionsStatisticsCallRPC,
  TransactionsStatisticsParams,
  TransactionsStatisticsResponse,
} from "./transactions"
import {
  ValidatorCall,
  ValidatorCallRPC,
  ValidatorParams,
  ValidatorResponse,
} from "./validator"
import { LimitOffset } from "../../types"

export type Calls =
  | AuthCall
  | BlocksCall
  | BlocksAssetsCall
  | BlockchainAppsCall
  | BlockchainAppsStatisticsCall
  | BlockchainAppsMetaCall
  | BlockchainAppsMetaListCall
  | BlockchainAppsMetaTokensCall
  | BlockchainAppsMetaTokensSupportedCall
  | EventsCall
  | ExportTransactionsCall
  | FeesCall
  | GeneratorsCall
  | InvokeCall
  | LegacyCall
  | MarketPricesCall
  | NetworkPeersCall
  | NetworkStatisticsCall
  | NetworkStatusCall
  | PoSRewardsClaimableCall
  | PoSRewardsLockedCall
  | PoSConstantsCall
  | PoSStakersCall
  | PoSStakesCall
  | PoSUnlocksCall
  | PoSValidatorsCall
  | RewardAnnualInflationCall
  | RewardConstantsCall
  | RewardDefaultCall
  | SchemasCall
  | IndexStatusCall
  | TokenAccountExistCall
  | TokenBalancesCall
  | TokenConstantsCall
  | TokenSummaryCall
  | TransactionsCall
  | TransactionsStatisticsCall
  | ValidatorCall

export type CallsRPC =
  | AuthCallRPC
  | BlocksCallRPC
  | BlocksAssetsCallRPC
  | BlockchainAppsCallRPC
  | BlockchainAppsStatisticsCallRPC
  | BlockchainAppsMetaCallRPC
  | BlockchainAppsMetaListCallRPC
  | BlockchainAppsMetaTokensCallRPC
  | BlockchainAppsMetaTokensSupportedCallRPC
  | EventsCallRPC
  | ExportTransactionsCallRPC
  | FeesCallRPC
  | GeneratorsCallRPC
  | LegacyCallRPC
  | MarketPricesCallRPC
  | NetworkPeersCallRPC
  | NetworkStatisticsCallRPC
  | NetworkStatusCallRPC
  | PoSRewardsClaimableCallRPC
  | PoSRewardsLockedCallRPC
  | PoSConstantsCallRPC
  | PoSStakersCallRPC
  | PoSStakesCallRPC
  | PoSUnlocksCallRPC
  | PoSValidatorsCallRPC
  | RewardAnnualInflationCallRPC
  | RewardConstantsCallRPC
  | RewardDefaultCallRPC
  | SchemasCallRPC
  | IndexStatusCallRPC
  | TokenAccountExistCallRPC
  | TokenBalancesCallRPC
  | TokenConstantsCallRPC
  | TokenSummaryCallRPC
  | TransactionsCallRPC
  | TransactionsStatisticsCallRPC
  | ValidatorCallRPC
export type PostCallsRPC =
  | InvokeCallRPC
  | PostTransactionsCallRPC
  | PostTransactionsDryRunCallRPC

export type CallTypes = {
  auth: { response: AuthResponse; params: AuthParams }
  blocks: { response: BlocksResponse; params: BlocksParams }
  "blocks/assets": {
    response: BlocksAssetsResponse
    params: BlocksAssetsParams
  }
  "blockchain/apps": {
    response: BlockchainAppsResponse
    params: BlockchainAppsParams
  }
  "blockchain/apps/statistics": {
    response: BlockchainAppsStatisticsResponse
    params: BlockchainAppsStatisticsParams
  }
  "blockchain/apps/meta": {
    response: BlockchainAppsMetaResponse
    params: BlockchainAppsMetaParams
  }
  "blockchain/apps/meta/list": {
    response: BlockchainAppsMetaListResponse
    params: BlockchainAppsMetaListParams
  }
  "blockchain/apps/meta/tokens": {
    response: BlockchainAppsMetaTokensResponse
    params: BlockchainAppsMetaTokensParams
  }
  "blockchain/apps/meta/tokens/supported": {
    response: BlockchainAppsMetaTokensSupportedResponse
    params: BlockchainAppsMetaTokensSupportedParams
  }
  events: {
    response: EventsResponse
    params: EventsParams
  }
  "export/transactions": {
    response: ExportTransactionsResponse
    params: ExportTransactionsParams
  }
  fees: {
    response: FeesResponse
    params: FeesParams
  }
  generators: {
    response: GeneratorsResponse
    params: LimitOffset
  }
  invoke: {
    response: InvokeResponse
    params: InvokeParams
  }
  legacy: {
    response: LegacyResponse
    params: LegacyParams
  }
  "market/prices": {
    response: MarketPricesResponse
    params: MarketPricesParams
  }
  "network/peers": {
    response: NetworkPeersResponse
    params: NetworkPeersParams
  }
  "network/statistics": {
    response: NetworkStatisticsResponse
    params: NetworkStatisticsParams
  }
  "network/status": {
    response: NetworkStatusResponse
    params: NetworkStatusParams
  }
  "pos/rewards/claimable": {
    response: PoSRewardsClaimableResponse
    params: PoSRewardsClaimableParams
  }
  "pos/rewards/locked": {
    response: PoSRewardsLockedResponse
    params: PoSRewardsLockedParams
  }
  "pos/constants": {
    response: PoSConstantsResponse
    params: PoSConstantsParams
  }
  "pos/stakers": {
    response: PoSStakersResponse
    params: PoSStakersParams
  }
  "pos/stakes": {
    response: PoSStakesResponse
    params: PoSStakesParams
  }
  "pos/unlocks": {
    response: PoSUnlocksResponse
    params: PoSUnlocksParams
  }
  "pos/validators": {
    response: PoSValidatorsResponse
    params: PoSValidatorsParams
  }
  "reward/annual-inflation": {
    response: RewardAnnualInflationResponse
    params: RewardAnnualInflationParams
  }
  "reward/constants": {
    response: RewardConstantsResponse
    params: RewardConstantsParams
  }
  "reward/default": {
    response: RewardDefaultResponse
    params: RewardDefaultParams
  }
  schemas: {
    response: SchemasResponse
    params: SchemasParams
  }
  "index/status": {
    response: IndexStatusResponse
    params: IndexStatusParams
  }
  "token/account/exist": {
    response: TokenAccountExistResponse
    params: TokenAccountExistParams
  }
  "token/balances": {
    response: TokenBalancesResponse
    params: TokenBalancesParams
  }
  "token/constants": {
    response: TokenConstantsResponse
    params: TokenConstantsParams
  }
  "token/summary": {
    response: TokenSummaryResponse
    params: TokenSummaryParams
  }
  transactions: {
    response: TransactionsResponse
    params: TransactionsParams
  }
  "transactions/statistics": {
    response: TransactionsStatisticsResponse
    params: TransactionsStatisticsParams
  }
  validator: {
    response: ValidatorResponse
    params: ValidatorParams
  }
}

export type CallTypesRPC = {
  "get.auth": { response: AuthResponse; params: AuthParams }
  "get.blocks": { response: BlocksResponse; params: BlocksParams }
  "get.blocks.assets": {
    response: BlocksAssetsResponse
    params: BlocksAssetsParams
  }
  "get.blockchain.apps": {
    response: BlockchainAppsResponse
    params: BlockchainAppsParams
  }
  "get.blockchain.apps.statistics": {
    response: BlockchainAppsStatisticsResponse
    params: BlockchainAppsStatisticsParams
  }
  "get.blockchain.apps.meta": {
    response: BlockchainAppsMetaResponse
    params: BlockchainAppsMetaParams
  }
  "get.blockchain.apps.meta.list": {
    response: BlockchainAppsMetaListResponse
    params: BlockchainAppsMetaListParams
  }
  "get.blockchain.apps.meta.tokens": {
    response: BlockchainAppsMetaTokensResponse
    params: BlockchainAppsMetaTokensParams
  }
  "get.blockchain.apps.meta.tokens.supported": {
    response: BlockchainAppsMetaTokensSupportedResponse
    params: BlockchainAppsMetaTokensSupportedParams
  }
  "get.events": {
    response: EventsResponse
    params: EventsParams
  }
  "get.export.transactions": {
    response: ExportTransactionsResponse
    params: ExportTransactionsParams
  }
  "get.fees": {
    response: FeesResponse
    params: FeesParams
  }
  "get.generators": {
    response: GeneratorsResponse
    params: LimitOffset
  }
  "get.legacy": {
    response: LegacyResponse
    params: LegacyParams
  }
  "get.market.prices": {
    response: MarketPricesResponse
    params: MarketPricesParams
  }
  "get.network.peers": {
    response: NetworkPeersResponse
    params: NetworkPeersParams
  }
  "get.network.statistics": {
    response: NetworkStatisticsResponse
    params: NetworkStatisticsParams
  }
  "get.network.status": {
    response: NetworkStatusResponse
    params: NetworkStatusParams
  }
  "get.pos.rewards.claimable": {
    response: PoSRewardsClaimableResponse
    params: PoSRewardsClaimableParams
  }
  "get.pos.rewards.locked": {
    response: PoSRewardsLockedResponse
    params: PoSRewardsLockedParams
  }
  "get.pos.constants": {
    response: PoSConstantsResponse
    params: PoSConstantsParams
  }
  "get.pos.stakers": {
    response: PoSStakersResponse
    params: PoSStakersParams
  }
  "get.pos.stakes": {
    response: PoSStakesResponse
    params: PoSStakesParams
  }
  "get.pos.unlocks": {
    response: PoSUnlocksResponse
    params: PoSUnlocksParams
  }
  "get.pos.validators": {
    response: PoSValidatorsResponse
    params: PoSValidatorsParams
  }
  "get.reward.annual-inflation": {
    response: RewardAnnualInflationResponse
    params: RewardAnnualInflationParams
  }
  "get.reward.constants": {
    response: RewardConstantsResponse
    params: RewardConstantsParams
  }
  "get.reward.default": {
    response: RewardDefaultResponse
    params: RewardDefaultParams
  }
  "get.schemas": {
    response: SchemasResponse
    params: SchemasParams
  }
  "get.index.status": {
    response: IndexStatusResponse
    params: IndexStatusParams
  }
  "get.token.account.exist": {
    response: TokenAccountExistResponse
    params: TokenAccountExistParams
  }
  "get.token.balances": {
    response: TokenBalancesResponse
    params: TokenBalancesParams
  }
  "get.token.constants": {
    response: TokenConstantsResponse
    params: TokenConstantsParams
  }
  "get.token.summary": {
    response: TokenSummaryResponse
    params: TokenSummaryParams
  }
  "get.transactions": {
    response: TransactionsResponse
    params: TransactionsParams
  }
  "get.transactions.statistics": {
    response: TransactionsStatisticsResponse
    params: TransactionsStatisticsParams
  }
  "get.validator": {
    response: ValidatorResponse
    params: ValidatorParams
  }
}

export type PostCallTypesRPC = {
  "post.invoke": {
    response: InvokeResponse
    params: InvokeParams
  }
  "post.transactions.dryrun": {
    response: PostTransactionsDryrunResponse
    params: PostTransactionsDryrunResponse
  }
  "post.transactions": {
    response: PostTransactionsResponse
    params: PostTransactionsParams
  }
}

export {
  AuthCall,
  AuthCallRPC,
  AuthParams,
  AuthResponse,
  BlocksAssetsCall,
  BlocksAssetsCallRPC,
  BlocksAssetsParams,
  BlocksAssetsResponse,
  BlocksCall,
  BlocksCallRPC,
  BlocksParams,
  BlocksResponse,
  BlockchainAppsCall,
  BlockchainAppsCallRPC,
  BlockchainAppsMetaCall,
  BlockchainAppsMetaCallRPC,
  BlockchainAppsMetaListCall,
  BlockchainAppsMetaListCallRPC,
  BlockchainAppsMetaListParams,
  BlockchainAppsMetaListResponse,
  BlockchainAppsMetaParams,
  BlockchainAppsMetaResponse,
  BlockchainAppsMetaTokensCall,
  BlockchainAppsMetaTokensCallRPC,
  BlockchainAppsMetaTokensParams,
  BlockchainAppsMetaTokensResponse,
  BlockchainAppsMetaTokensSupportedCall,
  BlockchainAppsMetaTokensSupportedCallRPC,
  BlockchainAppsMetaTokensSupportedParams,
  BlockchainAppsMetaTokensSupportedResponse,
  BlockchainAppsParams,
  BlockchainAppsResponse,
  BlockchainAppsStatisticsCall,
  BlockchainAppsStatisticsCallRPC,
  BlockchainAppsStatisticsParams,
  BlockchainAppsStatisticsResponse,
  EventsCall,
  EventsCallRPC,
  EventsParams,
  EventsResponse,
  ExportTransactionsCall,
  ExportTransactionsCallRPC,
  ExportTransactionsParams,
  ExportTransactionsResponse,
  FeesCall,
  FeesCallRPC,
  FeesParams,
  FeesResponse,
  GeneratorsCall,
  GeneratorsCallRPC,
  GeneratorsResponse,
  InvokeCall,
  InvokeCallRPC,
  InvokeParams,
  InvokeResponse,
  LegacyCall,
  LegacyCallRPC,
  LegacyParams,
  LegacyResponse,
  MarketPricesCall,
  MarketPricesCallRPC,
  MarketPricesParams,
  MarketPricesResponse,
  NetworkPeersCall,
  NetworkPeersCallRPC,
  NetworkPeersParams,
  NetworkPeersResponse,
  NetworkStatisticsCall,
  NetworkStatisticsCallRPC,
  NetworkStatisticsParams,
  NetworkStatisticsResponse,
  NetworkStatusCall,
  NetworkStatusCallRPC,
  NetworkStatusParams,
  NetworkStatusResponse,
  IndexStatusCall,
  IndexStatusCallRPC,
  IndexStatusParams,
  IndexStatusResponse,
  PoSConstantsCall,
  PoSConstantsCallRPC,
  PoSConstantsParams,
  PoSConstantsResponse,
  PoSRewardsClaimableCall,
  PoSRewardsClaimableCallRPC,
  PoSRewardsClaimableParams,
  PoSRewardsClaimableResponse,
  PoSRewardsLockedCall,
  PoSRewardsLockedCallRPC,
  PoSRewardsLockedParams,
  PoSRewardsLockedResponse,
  PoSStakersCall,
  PoSStakersCallRPC,
  PoSStakersParams,
  PoSStakersResponse,
  PoSStakesCall,
  PoSStakesCallRPC,
  PoSStakesParams,
  PoSStakesResponse,
  PoSUnlocksCall,
  PoSUnlocksCallRPC,
  PoSUnlocksParams,
  PoSUnlocksResponse,
  PoSValidatorsCall,
  PoSValidatorsCallRPC,
  PoSValidatorsParams,
  PoSValidatorsResponse,
  RewardAnnualInflationCall,
  RewardAnnualInflationCallRPC,
  RewardAnnualInflationParams,
  RewardAnnualInflationResponse,
  RewardConstantsCall,
  RewardConstantsCallRPC,
  RewardConstantsParams,
  RewardConstantsResponse,
  RewardDefaultCall,
  RewardDefaultCallRPC,
  RewardDefaultParams,
  RewardDefaultResponse,
  SchemasCall,
  SchemasCallRPC,
  SchemasParams,
  SchemasResponse,
  TokenAccountExistCall,
  TokenAccountExistCallRPC,
  TokenAccountExistParams,
  TokenAccountExistResponse,
  TokenBalancesCall,
  TokenBalancesCallRPC,
  TokenBalancesParams,
  TokenBalancesResponse,
  TokenConstantsCall,
  TokenConstantsCallRPC,
  TokenConstantsParams,
  TokenConstantsResponse,
  TokenSummaryCall,
  TokenSummaryCallRPC,
  TokenSummaryParams,
  TokenSummaryResponse,
  TransactionsCall,
  TransactionsCallRPC,
  TransactionsParams,
  TransactionsResponse,
  TransactionsStatisticsCall,
  TransactionsStatisticsCallRPC,
  TransactionsStatisticsParams,
  TransactionsStatisticsResponse,
  ValidatorCall,
  ValidatorCallRPC,
  ValidatorParams,
  ValidatorResponse,
  LimitOffset,
  PostTransactionsParams,
  PostTransactionsDryrunResponse,
  PostTransactionsResponse,
  PostTransactionsDryRunCallRPC,
  PostTransactionsCallRPC,
}

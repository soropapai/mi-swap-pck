import type { Signer } from '@ethersproject/abstract-signer'
import type { Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { simpleRpcProvider } from 'utils/providers'
import tokens from 'config/constants/tokens'

// Addresses
import {
  getPancakeProfileAddress,
  getPancakeRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
  getMasterChefAddress,
  getClaimRefundAddress,
  getCakeVaultAddress,
  getPredictionsAddress,
  getChainlinkOracleAddress,
  getMulticallAddress,
  getBunnySpecialCakeVaultAddress,
  getAnniversaryAchievement,
  getPancakeSquadAddress,
  getBunnySpecialXmasAddress,
} from 'utils/addressHelpers'

// ABI
import profileABI from 'config/abi/pancakeProfile.json'
import pancakeRabbitsAbi from 'config/abi/pancakeRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'
import bep20Abi from 'config/abi/erc20.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import cakeAbi from 'config/abi/cake.json'
import masterChef from 'config/abi/masterchef.json'
import claimRefundAbi from 'config/abi/claimRefund.json'
import cakeVaultAbi from 'config/abi/cakeVault.json'
import predictionsAbi from 'config/abi/predictions.json'
import chainlinkOracleAbi from 'config/abi/chainlinkOracle.json'
import MultiCallAbi from 'config/abi/Multicall.json'
import bunnySpecialCakeVaultAbi from 'config/abi/bunnySpecialCakeVault.json'
import bunnySpecialXmasAbi from 'config/abi/bunnySpecialXmas.json'
import anniversaryAchievementAbi from 'config/abi/anniversaryAchievement.json'
import pancakeSquadAbi from 'config/abi/pancakeSquad.json'

// Types
import type {
  ChainlinkOracle,
  Predictions,
  AnniversaryAchievement,
  Erc20,
  Cake,
  BunnyFactory,
  PancakeRabbits,
  PancakeProfile,
  Masterchef,
  BunnySpecial,
  LpToken,
  ClaimRefund,
  CakeVault,
  Multicall,
  BunnySpecialCakeVault,
  PancakeSquad,
} from 'config/abi/types'

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: Signer | Provider) => {
  return getContract(bep20Abi, address, signer) as Erc20
}
export const getLpContract = (address: string, signer?: Signer | Provider) => {
  return getContract(lpTokenAbi, address, signer) as LpToken
}
export const getCakeContract = (signer?: Signer | Provider) => {
  return getContract(cakeAbi, tokens.cake.address, signer) as Cake
}
export const getProfileContract = (signer?: Signer | Provider) => {
  return getContract(profileABI, getPancakeProfileAddress(), signer) as PancakeProfile
}
export const getPancakeRabbitContract = (signer?: Signer | Provider) => {
  return getContract(pancakeRabbitsAbi, getPancakeRabbitsAddress(), signer) as PancakeRabbits
}
export const getBunnyFactoryContract = (signer?: Signer | Provider) => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress(), signer) as BunnyFactory
}
export const getBunnySpecialContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress(), signer) as BunnySpecial
}
export const getMasterchefContract = (signer?: Signer | Provider) => {
  return getContract(masterChef, getMasterChefAddress(), signer) as Masterchef
}
export const getClaimRefundContract = (signer?: Signer | Provider) => {
  return getContract(claimRefundAbi, getClaimRefundAddress(), signer) as ClaimRefund
}

export const getCakeVaultContract = (signer?: Signer | Provider) => {
  return getContract(cakeVaultAbi, getCakeVaultAddress(), signer) as CakeVault
}

export const getPredictionsContract = (signer?: Signer | Provider) => {
  return getContract(predictionsAbi, getPredictionsAddress(), signer) as unknown as Predictions
}

export const getChainlinkOracleContract = (signer?: Signer | Provider) => {
  return getContract(chainlinkOracleAbi, getChainlinkOracleAddress(), signer) as ChainlinkOracle
}
export const getMulticallContract = () => {
  return getContract(MultiCallAbi, getMulticallAddress(), simpleRpcProvider) as Multicall
}
export const getBunnySpecialCakeVaultContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialCakeVaultAbi, getBunnySpecialCakeVaultAddress(), signer) as BunnySpecialCakeVault
}
export const getBunnySpecialXmasContract = (signer?: Signer | Provider) => {
  return getContract(bunnySpecialXmasAbi, getBunnySpecialXmasAddress(), signer)
}
export const getAnniversaryAchievementContract = (signer?: Signer | Provider) => {
  return getContract(anniversaryAchievementAbi, getAnniversaryAchievement(), signer) as AnniversaryAchievement
}
export const getPancakeSquadContract = (signer?: Signer | Provider) => {
  return getContract(pancakeSquadAbi, getPancakeSquadAddress(), signer) as PancakeSquad
}

import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {
  getBep20Contract,
  getCakeContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getProfileContract,
  getMasterchefContract,
  getClaimRefundContract,
  getCakeVaultContract,
  getChainlinkOracleContract,
  getBunnySpecialCakeVaultContract,
  getAnniversaryAchievementContract,
  getPancakeSquadContract,
  getBunnySpecialXmasContract,
} from 'utils/contractHelpers'
import { getMulticallAddress } from 'utils/addressHelpers'
import {
  EnsPublicResolver,
  EnsRegistrar,
  Erc20,
  Erc20Bytes32,
  Multicall,
  Weth,
} from 'config/abi/types'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import { ChainId, WETH } from '@pancakeswap/sdk'
import IPancakePairABI from '../config/abi/IPancakePair.json'
import ENS_PUBLIC_RESOLVER_ABI from '../config/abi/ens-public-resolver.json'
import ENS_ABI from '../config/abi/ens-registrar.json'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ERC20_ABI from '../config/abi/erc20.json'
import WETH_ABI from '../config/abi/weth.json'
import multiCallAbi from '../config/abi/Multicall.json'
import { getContract, getProviderOrSigner } from '../utils'

import { IPancakePair } from '../config/abi/types/IPancakePair'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string, withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  return useMemo(
    () => getBep20Contract(address, withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [account, address, library, withSignerIfPossible],
  )
}

export const useCake = (withSignerIfPossible = true) => {
  const { account, library } = useActiveWeb3React()
  return useMemo(
    () => getCakeContract(withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [account, library, withSignerIfPossible],
  )
}

export const useBunnyFactory = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnyFactoryContract(library.getSigner()), [library])
}

export const usePancakeRabbits = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPancakeRabbitContract(library.getSigner()), [library])
}

export const useProfileContract = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  return useMemo(
    () => getProfileContract(withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [withSignerIfPossible, account, library],
  )
}

export const useMasterchef = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getMasterchefContract(library.getSigner()), [library])
}

export const useBunnySpecialContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialContract(library.getSigner()), [library])
}

export const useClaimRefundContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getClaimRefundContract(library.getSigner()), [library])
}

export const useCakeVaultContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getCakeVaultContract(library.getSigner()), [library])
}

export const useChainlinkOracleContract = (withSignerIfPossible = true) => {
  const { library, account } = useActiveWeb3React()
  return useMemo(
    () => getChainlinkOracleContract(withSignerIfPossible ? getProviderOrSigner(library, account) : null),
    [account, library, withSignerIfPossible],
  )
}

export const useSpecialBunnyCakeVaultContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialCakeVaultContract(library.getSigner()), [library])
}

export const useBunnySpecialXmasContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialXmasContract(library.getSigner()), [library])
}

export const useAnniversaryAchievementContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getAnniversaryAchievementContract(library.getSigner()), [library])
}

export const usePancakeSquadContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPancakeSquadContract(library.getSigner()), [library])
}

// Code below migrated from Exchange useContract.ts

// returns null on errors
function useContract<T extends Contract = Contract>(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
): T | null {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, withSignerIfPossible ? getProviderOrSigner(library, account) : null)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account]) as T
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean) {
  return useContract<Erc20>(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract<Weth>(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    // eslint-disable-next-line default-case
    switch (chainId) {
      case ChainId.MAINNET:
      case ChainId.TESTNET:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        break
    }
  }
  return useContract<EnsRegistrar>(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract<EnsPublicResolver>(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract<Erc20Bytes32>(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): IPancakePair | null {
  return useContract(pairAddress, IPancakePairABI, withSignerIfPossible)
}

export function useMulticallContract() {
  return useContract<Multicall>(getMulticallAddress(), multiCallAbi, false)
}

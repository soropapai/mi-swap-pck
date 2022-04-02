import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SkullSwap',
  description:
    'Discover SkullSwap, the new DEX on BNB Smart Chain (BSC) with the most profitable farms in DeFi and a magnificent collection of NFTs.',
  image: 'https://skullswap.cf/images/logoskull.png',
  // image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Swap')} | ${t('SkullSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Swap')} | ${t('SkullSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SkullSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SkullSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SkullSwap')}`,
      }
    default:
      return null
  }
}

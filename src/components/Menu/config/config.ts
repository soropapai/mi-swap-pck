import { MenuItemsType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
// import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Swap'),
    icon: 'Swap',
    href: '/',
    showItemsOnMobile: false,
    items: [
    ],
  },
  {
    label: t('Liquidity'),
    href: '/liquidity',
    icon: 'Earn',
    items: [
    ],
  },
]

export default config

import { useRouter } from 'next/router'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  // const cakePriceUsd = usePriceCakeBusd()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  return (
    <UikitMenu
      linkComponent={(linkProps) => {
        return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
      }}
      // conectar wallet
      userMenu={<UserMenu />}

      // configuraciones de usuario
      globalMenu={<GlobalSettings />}

      isDark={isDark}
      toggleTheme={toggleTheme}

      // no borrar traduccion porque da error
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}

      // precio con logo
      // cakePriceUsd={cakePriceUsd.toNumber()}

      // no se pero da error
      links={config(t)}

      // no se
      subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}

      // llamada al menu de pie de pagina
      footerLinks={footerLinks(t)}

      // resalta cualquier menu activo
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}

      // enlace a comprar CAKE en PancakeSwap
      buyCakeLabel={t('Buy SKULL')}

      {...props}
    />
  )
}

export default Menu

import { ResetCSS } from '@pancakeswap/uikit'
// import { Redirect } from 'react-router-dom'
import BigNumber from 'bignumber.js'
// import SubgraphHealthIndicator from 'components/SubgraphHealthIndicator'
import { ToastListener } from 'contexts/ToastsContext'
import useEagerConnect from 'hooks/useEagerConnect'
import { useInactiveListener } from 'hooks/useInactiveListener'
import useSentryUser from 'hooks/useSentryUser'
import useUserAgent from 'hooks/useUserAgent'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore, persistor } from 'state'
import { usePollBlockNumber } from 'state/block/hooks'
import { NextPage } from 'next'
import { Blocklist, Updaters } from '..'
import ErrorBoundary from '../components/ErrorBoundary'
import Menu from '../components/Menu'
import BlockCountry from '../components/BlockCountry'
import Providers from '../Providers'
import GlobalStyle from '../style/Global'

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function GlobalHooks() {
  usePollBlockNumber()
  useEagerConnect()
  useUserAgent()
  useInactiveListener()
  useSentryUser()
  return null
}

function MyApp(props: AppProps) {
  const { pageProps } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Discover SkullSwap, the new DEX on BNB Smart Chain (BSC) with the most profitable farms in DeFi and a magnificent collection of NFTs."
        />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="https://skullswap.cf/images/logoskull.png" />
        <meta
          name="twitter:description"
          content="The new AMM in BSC! Earn SKULL through yield farming, stake in Pools to earn more tokens! Great collections of NFTs and constant improvements on a innovative platform."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SkullSwap - A next evolution DeFi exchange on BNB Smart Chain" />
        <title>PancakeSwap</title>
      </Head>
      <Providers store={store}>
        <Blocklist>
          <GlobalHooks />
          <Updaters />
          <ResetCSS />
          <GlobalStyle />
          <PersistGate loading={null} persistor={persistor}>
            <BlockCountry />
            <App {...props} />
          </PersistGate>
        </Blocklist>
      </Providers>

    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const ProductionErrorBoundary = process.env.NODE_ENV === 'production' ? ErrorBoundary : Fragment

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment
  return (
    <ProductionErrorBoundary>

    {/* <Redirect to='/swap' /> */}

      <Menu>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Menu>
      <ToastListener />

    </ProductionErrorBoundary>
  )
}

export default MyApp
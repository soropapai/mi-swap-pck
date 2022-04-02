import styled from 'styled-components'
import { Text } from '@pancakeswap/uikit'

const Wrapper = styled.div<{ $isSide: boolean }>`
  width: 100%;
  height: ${({ $isSide }) => ($isSide ? '100%' : 'auto')};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  padding-right: ${({ $isSide }) => ($isSide ? '32px' : '0px')};
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: ${({ $isSide }) => ($isSide ? 'column' : 'row')};
  }
`

type FooterVariant = 'default' | 'side'

const Footer: React.FC<{ variant?: FooterVariant }> = ({ variant = 'default' }) => {
  // const { t } = useTranslation()
  const isSide = variant === 'side'
  return (
    <Wrapper $isSide={isSide}>
      <Text>Powered by PancakeSwap©</Text>
    </Wrapper>
  )
}

export default Footer

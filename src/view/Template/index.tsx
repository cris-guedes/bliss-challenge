import { ReactNode, useEffect, useState } from 'react'
import * as S from './styles'
import Header from '@/view/Components/Header'
import ModalOffline from '@/view/Components/ModalOffLine'
import ModalApiHealth from '@/view/Components/ModalApiHealth'

type Props = {
  children: ReactNode
}
function Template({ children }: Props) {
  return (
    <S.Container>
      <Header />
      <S.Banner>
        <b>Quick </b> Questions
      </S.Banner>
      {children}
      <ModalOffline />
      <ModalApiHealth />
    </S.Container>
  )
}

export default Template

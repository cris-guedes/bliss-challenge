import React, { useState } from 'react'
import ShareModal from '@/view/Components/Share'
import Modal from '../Modal'
import * as S from './styles'

function ShareButton() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <S.Container>
      <S.Button onClick={() => setIsOpen(true)}>
        Share
        <img width={35} alt="Share" src="/img/share.svg" />
      </S.Button>
      <Modal isOpenned={isOpen}>
        <ShareModal close={handleClose} />
      </Modal>
    </S.Container>
  )
}
export default ShareButton

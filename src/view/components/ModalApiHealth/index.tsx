import { useEffect, useState } from 'react'
import useApiHealth from '@/view/hooks/useApiHealth'
import Modal from '../Modal'

import * as S from './styles'
import Loader from '../Loader'

function ModalApiHealth() {
  const { apiIsready, isLoading } = useApiHealth()
  const [isOpen, setIsOpen] = useState(apiIsready)

  useEffect(() => {
    setIsOpen(!apiIsready)
  }, [apiIsready])

  function handleClick() {
    window.location.reload()
    setIsOpen(false)
  }

  return (
    <S.Container>
      <Modal isOpenned={isOpen}>
        {isLoading && <Loader />}
        <S.Hug>
          an error occurred while accessing the data
          <S.RetryCard onClick={handleClick}>
            Retry
            <S.Icon>🔃</S.Icon>
          </S.RetryCard>
        </S.Hug>
      </Modal>
    </S.Container>
  )
}
export default ModalApiHealth

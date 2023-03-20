import useNetworStatus from '@/view/hooks/useNetworkStatus'
import Modal from '../Modal'

import * as S from './styles'

function ModalOffline() {
  const isOnline = useNetworStatus()

  return (
    <S.Container>
      <Modal closeModal={() => {}} isOpenned={!navigator.onLine}>
        <>you are Offline</>
      </Modal>
    </S.Container>
  )
}
export default ModalOffline

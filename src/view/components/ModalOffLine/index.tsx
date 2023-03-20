import useNetworStatus from '@/view/hooks/useNetworkStatus'
import Modal from '../Modal'

import { Container, Text } from './styles'

function ModalOffline() {
  const isOnline = useNetworStatus()

  return (
    <Container>
      <Modal closeModal={() => {}} isOpenned={!navigator.onLine}>
        <Text>you are Offline</Text>
      </Modal>
    </Container>
  )
}
export default ModalOffline

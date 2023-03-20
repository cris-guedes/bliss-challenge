import { useState } from 'react'

import useShare from '@/view/hooks/useShare'
import * as S from './styles'

type Props = {
  close: () => void
}

function Share({ close }: Props) {
  const [email, setEmail] = useState('')
  const { share } = useShare()

  const url = window.location.href

  function handleClose() {
    setEmail('')
    close()
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    share({ destination_email: email, content_url: url })

    close()
  }

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.EmailInput
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <S.AreaButton>
          <S.CloseButton onClick={handleClose}>Close</S.CloseButton>
          <S.SubmitButton type="submit">Submit</S.SubmitButton>
        </S.AreaButton>
      </form>
    </S.Container>
  )
}

export default Share

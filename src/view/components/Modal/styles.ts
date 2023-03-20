import styled from 'styled-components'

type Props = {
  width?: string
  height?: string
}

export const Wrapper = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.521);
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

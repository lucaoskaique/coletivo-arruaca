import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #ce2024;
  color: #fff;
  width: 100%;
  padding: 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const BoxImage2 = styled.div``
export const Logo = styled.img`
  width: min(50rem, 100%);
`
export const Illustration = styled.img`
  width: min(35rem, 100%);
`
export const QrCode = styled.img`
  margin-top: 1rem;
  width: min(35rem, 100%);
  border-radius: 5%;
`
export const PixTextImage = styled.img`
  margin-top: 1rem;
  width: min(35rem, 100%);
`
export const BoxImage = styled.div`
  display: inline-block;
  vertical-align: top;

  animation: zoom-in-zoom-out 1s ease infinite;
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`
export const Content = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

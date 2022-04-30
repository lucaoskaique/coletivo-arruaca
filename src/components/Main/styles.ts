import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #ce2024;
  color: #fff;
  width: 100%;
  padding: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

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
`

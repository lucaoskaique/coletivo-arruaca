import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/header-arruaca.png"
      alt="Uma caixa de som do lado esquerdo e uma bandeira anarquista do lado direito."
    />
    <S.BoxImage>
      <S.Illustration
        src="/img/gravegeral-arruaça.png"
        alt="Texto estilizado escrito GRAVE GERAL."
      />
    </S.BoxImage>
    <S.Content>
      <S.QrCode src="/img/qrcode-arruaca.jpeg" alt="QrCode divulgação." />
    </S.Content>
  </S.Wrapper>
)

export default Main

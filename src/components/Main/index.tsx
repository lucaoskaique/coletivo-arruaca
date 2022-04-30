import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.BoxImage2>
      <S.Logo
        src="/img/header-arruaca.png"
        alt="Uma caixa de som do lado esquerdo e uma bandeira anarquista do lado direito."
      />
    </S.BoxImage2>
    <S.BoxImage>
      <S.Illustration
        src="/img/gravegeral-arruaça.png"
        alt="Texto estilizado escrito GRAVE GERAL."
      />
    </S.BoxImage>
    <S.Content>
      <S.QrCode src="/img/qrcode-arruaca.jpeg" alt="QrCode divulgação." />
      <S.PixTextImage
        src="/img/pix-text.png"
        alt="Texto Pix:coletivoarruaca@gmail.com."
      />
    </S.Content>
  </S.Wrapper>
)

export default Main

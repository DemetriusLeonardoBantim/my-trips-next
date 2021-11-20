import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="atomo e React avancado" />
    <S.Title>React avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJs e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main

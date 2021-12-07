import * as S from './styles'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'
import LinkWrapper from 'components/LinkWrapper'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseCircleOutline size={32} />
    </LinkWrapper>
    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PageTemplate

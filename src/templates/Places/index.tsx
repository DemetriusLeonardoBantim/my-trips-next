import * as S from './style'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import Image from 'next/image'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplatePorps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplates({ place }: PlaceTemplatePorps) {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                src={image.url}
                alt={place.name}
                key={`photo-${index}`}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

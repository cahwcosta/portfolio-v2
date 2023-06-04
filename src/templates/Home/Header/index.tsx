import * as S from './styles';
import C from './const';
import { useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';

const Header = () => {
  const textsRef = useRef<HTMLParagraphElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const pushTextsRef = (el: HTMLParagraphElement) => textsRef.current.push(el);

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(textsRef.current, {
      y: 0,
      opacity: 1,
      ease: Power1.easeInOut,
      duration: 0.7,
      stagger: 0.15
    })
    tl.to(buttonRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: Power1.easeInOut,
    })
    tl.to(imageRef.current, {
      y: 0,
      opacity: 1,
      ease: Power1.easeInOut,
    })
  }, [])

  return (
    <S.Header>
      <S.Container>
        <S.Texts>
          <S.TextLine>
            <S.Hello ref={pushTextsRef}>{C.hello}</S.Hello>
          </S.TextLine>
          <S.TextLine>
            <S.Name ref={pushTextsRef}>{C.name}</S.Name>
          </S.TextLine>
          <S.TextLine>
            <S.Profission ref={pushTextsRef}>{C.profission}</S.Profission>
          </S.TextLine>
          <S.Button ref={buttonRef}>{C.button.text}</S.Button>
        </S.Texts>
        <S.Image ref={imageRef} src={C.image}/>
      </S.Container>
    </S.Header>
  )
}

export default Header;
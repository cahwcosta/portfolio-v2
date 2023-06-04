import * as S from './styles';
import {TitleProps} from './props';
import { FC, useEffect, useRef } from 'react';
import { Power1, gsap } from 'gsap';

const Title:FC<TitleProps> = ({title, subtitle, isAnimated}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLParagraphElement[]>([]);
  const pushTextsRef = (el: HTMLParagraphElement) => textsRef.current.push(el);

  useEffect(() => {
    if (isAnimated) {
      gsap.to(textsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%'
        },
        duration: 0.8,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: Power1.easeInOut
      })
    }
  }, [])

  return (
    <S.TitleContainer ref={containerRef}>
      <S.Title isAnimated={isAnimated}><p ref={pushTextsRef}>{title}</p></S.Title>
      <S.Subtitle isAnimated={isAnimated}><p ref={pushTextsRef}>{subtitle}</p></S.Subtitle>
    </S.TitleContainer>
  )
}

export default Title;
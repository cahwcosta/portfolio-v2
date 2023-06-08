import * as S from './styles';
import C from './const';
import Title from '../../../components/Title';
import { useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';

const Habilidades = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef= useRef<HTMLDivElement[]>([]);
  const pushCardsRef = (el: HTMLParagraphElement) => cardsRef.current.push(el);

  useEffect(() => {
    gsap.to(cardsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%'
      },
      y: 0,
      duration: 1.3,
      delay: 0.9,
      stagger: 0.1,
      opacity: 1
    })
  }, [])

  return (
    <S.Habilidades id={C.id}>
      <Title isAnimated={true} title={C.title} subtitle={C.subtitle}/>

      <S.Cards ref={containerRef}>
        {C.cards.map((card, index) => (
          <S.Card key={index} ref={pushCardsRef}>
            <S.Image src={card.image}/>
            <S.Text>{card.text}</S.Text>
          </S.Card>
        ))}
      </S.Cards>
    </S.Habilidades>
  )
}

export default Habilidades;
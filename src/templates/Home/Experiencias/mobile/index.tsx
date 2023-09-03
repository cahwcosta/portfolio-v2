import * as S from './styles';
import C from '../const'
import Title from '../../../../components/Title';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Select from '../../../../components/Select';

const Experiencias = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 70%',
      },
      y: 0,
      opacity: 1,
      delay: 1,
      duration: 0.8
    })
  }, [])

  return (
    <S.Experiencias id={C.id} ref={containerRef}>
      <S.Content ref={contentRef}>
        <Title isAnimated={true} title={C.title} subtitle={C.subtitle}/>
        <Select items={C.topics.map(topic => topic.title)}/>
      </S.Content>
    </S.Experiencias>
  )
}

export default Experiencias;
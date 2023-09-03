import * as S from './styles';
import C from '../const'
import Title from '../../../../components/Title';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experiencias = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const titlesRef = useRef<HTMLParagraphElement[]>([]);
  const topicsRef = useRef<HTMLDivElement[]>([]);

  const pushTitleRef = (el: HTMLParagraphElement) => titlesRef.current.push(el);
  const pushTopicRef = (el: HTMLParagraphElement) => topicsRef.current.push(el);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: pinRef.current,
        start: 'top 70%',
      },
      y: 0,
      opacity: 1,
      delay: 1,
      duration: 0.8
    })
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: pinRef.current,
          start: 'top 30%',
          end: 'bottom 30%',
          scrub: 1
        }
      })

      titlesRef.current.map((title, index) => {
        tl.to(title, {
          color: '#A557C9'
        })
        let previousTitle = titlesRef.current[index - 1]
        tl.to(previousTitle, {
          color: '#6C6C78'
        },'<')

        tl.to(topicsRef.current[index], {
          opacity: 1
        }, '<')
        let previousTopic = topicsRef.current[index - 1]
        tl.to(previousTopic, {
          opacity: 0
        }, '<')

        tl.to(indicatorRef.current, {
          y: `${title?.offsetTop}`
        }, '<')
      })
    })
    return () => ctx.revert();
  }, [])

  return (
    <S.Experiencias id={C.id}>
      <S.Content>
        <S.Trigger ref={triggerRef}/>
        <S.Pin ref={pinRef}>
        <Title isAnimated={true} title={C.title} subtitle={C.subtitle}/>
          <S.Topics ref={containerRef}>
            <S.Indicator ref={indicatorRef}/>
            <S.Titles>
              {C.topics.map((topic, index) => (
                <S.Title ref={pushTitleRef} key={index}>{topic.title}</S.Title>
              ))}
            </S.Titles>

            <S.Texts>
              {C.topics.map((topic, index) => (
                <S.Topic ref={pushTopicRef} key={index}>
                  <S.Duration>{topic.duration}</S.Duration>
                  <S.Text>{topic.text}</S.Text>
                </S.Topic>
              ))}
            </S.Texts>
          </S.Topics>
        </S.Pin>
      </S.Content>
    </S.Experiencias>
  )
}

export default Experiencias;
import { useEffect, useState } from 'react';
import * as S from './styles';

const ProgressLine = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const scrollProgress = () => {
      const fullHeight = document.body.scrollHeight - window.innerHeight;
      const scrollInput = window.scrollY;
      setScroll((scrollInput / fullHeight) * 100);
    }
    window.addEventListener('scroll', scrollProgress)
  }, [])

  return (
    <S.ProgressLine scrollPercent={scroll}/>
  )
}

export default ProgressLine;
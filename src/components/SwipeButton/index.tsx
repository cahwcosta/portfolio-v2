import * as S from './styles';
import { useState } from 'react';

const SwipeButton = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <S.SwipeButton active={isActive} onClick={handleClick}>
      <S.Circle active={isActive}></S.Circle>
    </S.SwipeButton>
  )
}

export default SwipeButton;
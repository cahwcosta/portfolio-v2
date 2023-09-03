import ScrollTo from '../../../../components/ScrollTo'
import SwipeButton from '../../../../components/SwipeButton'
import * as S from './styles'
import C from '../const'
import { useRef, useState } from 'react'

const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const hiddenContentRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLUListElement>(null)

  const handleActiveBurger = () => {
    setIsActive(!isActive);
    if (hiddenContentRef.current && wrapperRef.current) {
      if (isActive == false) {
        hiddenContentRef.current.style.height = `${wrapperRef.current.clientHeight}px`
      } else {
        hiddenContentRef.current.style.height = "0";
      }
    }
  }
 return (
  <S.NavbarMobile>
    <S.Header>
      <S.Logo src={C.logo}/>

      <S.Burguer onClick={handleActiveBurger}>
        <S.Line active={isActive}/>
        <S.Line active={isActive}/>
        <S.Line active={isActive}/>
      </S.Burguer>

    </S.Header>
      
    <S.Menu ref={hiddenContentRef}>
      <S.Options ref={wrapperRef}>
        {C.options.map(option => (
          <ScrollTo key={option.hash} hash={option.hash}>
            <S.Option onClick={handleActiveBurger}>{option.text}</S.Option>
          </ScrollTo>
        ))}
        <S.SwipeButtonContainer>
          <SwipeButton/>
        </S.SwipeButtonContainer>
      </S.Options>
    </S.Menu>
  </S.NavbarMobile>
 )
}

export default NavbarMobile;
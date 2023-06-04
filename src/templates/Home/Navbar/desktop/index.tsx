import * as S from './styles'
import C from '../const'
import ScrollTo from '../../../../components/ScrollTo'
import SwipeButton from '../../../../components/SwipeButton'
import ProgressLine from '../../../../components/ProgressLine'

const NavbarDesktop = () => {
 return (
  <S.Navbar>
    <S.Content>
      <S.Logo src={C.logo}/>
      <S.Options>
        {C.options.map(option => (
          <ScrollTo key={option.hash} hash={option.hash}>
            <S.Option>{option.text}</S.Option>
          </ScrollTo>
        ))}
      </S.Options>
      <SwipeButton/>
    </S.Content>
    <ProgressLine/>
  </S.Navbar>
 )
}

export default NavbarDesktop
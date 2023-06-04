import * as S from './styles';
import * as I from './props';

const ResponsiveElement = ({content, mobile}: I.ResponsiveElementProps) => {
  return (
    <S.ResponsiveElement>
      <S.Content>
        {content}
      </S.Content>
      <S.Mobile>
        {mobile}
      </S.Mobile>
    </S.ResponsiveElement>
  )
}

export default ResponsiveElement;
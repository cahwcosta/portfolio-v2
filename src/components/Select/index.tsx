import * as S from './styles';
import { SelectProps } from './props';
import { FC, useEffect, useRef, useState } from 'react';

const Select:FC<SelectProps> = ({items}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const accordionWrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <S.Select>
      <S.Input ref={inputRef} onClick={() => setOpen(!open)}>
        {items[0]}
        <S.Icon open={open}/>
        <S.Icon open={open}/>
      </S.Input>
      <S.Accordion open={open}>
        <S.AccordionWrapper>
          {items.map((item, index) => (
            <S.Option onClick={() => setOpen(false)} key={index}>{item}</S.Option>
          ))}
        </S.AccordionWrapper>
      </S.Accordion>
    </S.Select>
  )
}

export default Select;
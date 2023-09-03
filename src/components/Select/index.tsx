import * as S from './styles';
import { SelectProps } from './props';
import { FC, useRef, useState } from 'react';

const Select:FC<SelectProps> = ({items}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState("");

  const handleOption = (item: string) => {
    setOpen(false);
    setCurrentOption(item);
  }

  return (
    <S.Select>
      <S.Input ref={inputRef} onClick={() => setOpen(!open)}>
        {currentOption !== "" ? currentOption : items[0]}
        <S.Icon open={open}/>
        <S.Icon open={open}/>
      </S.Input>
      <S.Accordion open={open}>
        <S.AccordionWrapper>
          {items.map((item, index) => (
            <S.Option onClick={() => handleOption(item)} key={index}>{item}</S.Option>
          ))}
        </S.AccordionWrapper>
      </S.Accordion>
    </S.Select>
  )
}

export default Select;
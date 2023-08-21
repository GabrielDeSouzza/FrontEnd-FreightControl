import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { IComboBox } from 'types/IComboBox';
import Input from 'components/Input/Input';
export const ComboBox: React.FC<IComboBox> = function ({
  data = [],
  placeholder = '',
  name = 'name',
  label = 'label',
  messageError,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const toggling = () => setIsOpen(!isOpen);
  const handleValue = (item: string) => () => {
    setValue(item);
    setIsOpen(false);
  };
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex !== null && prevIndex < data.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : data.length - 1
      );
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      setValue(data[selectedIndex]);
    }
  }, [data, selectedIndex]);
  return (
    <S.DropDownContainer>
      <S.DropDownHeader>
        <Input
          onKeyDown={handleKeyDown}
          onClick={toggling}
          label={label}
          name={name}
          placeholder={placeholder}
          type="button"
          value={value}
          messageError={messageError}
          onChange={onChange}
        ></Input>
      </S.DropDownHeader>
      <S.SpanError>{messageError}</S.SpanError>
      <S.DropDownListContainer isopen={isOpen}>
        {isOpen && (
          <S.DropDownList>
            {data.map((item) => (
              <S.ListItem key={item} onClick={handleValue(item)}>
                {item}
              </S.ListItem>
            ))}
          </S.DropDownList>
        )}
      </S.DropDownListContainer>
    </S.DropDownContainer>
  );
};

export default ComboBox;

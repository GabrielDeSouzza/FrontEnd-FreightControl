import React from 'react';
import * as S from './styles';
import { IComboBox } from 'types/IComboBox';
import { Controller, useFormContext } from 'react-hook-form';
export const ComboBox: React.FC<IComboBox> = function ({
  data = [],
  placeholder = '',
  name = 'name',
  label = 'label',
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setOption] = React.useState('');
  const toggling = () => setIsOpen(!isOpen);
  const handleValue = (item: string) => () => {
    console.log(name + ' ' + item);
    setValue(name, item);
    setOption(item);
    trigger(name);
    setIsOpen(false);
  };
  const {
    control,
    setValue,
    formState: { errors },
    trigger,
  } = useFormContext();
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
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

  React.useEffect(() => {
    if (selectedIndex !== null) {
      console.log('dsf');
      setValue(name, data[selectedIndex]);
      setOption(data[selectedIndex]);
    }
  }, [data, name, selectedIndex, setValue]);
  return (
    <S.DropDownContainer>
      <S.DropDownHeader>
        <S.Label htmlFor={name}> {label}</S.Label>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <S.Wrapper>
              <S.Input
                {...field}
                name={name}
                type="text"
                placeholder={placeholder}
                onClick={toggling}
                onKeyDown={handleKeyDown}
                value={value}
              />
            </S.Wrapper>
          )}
        />
        <S.SpanError>{errors[name]?.message?.toString()}</S.SpanError>
      </S.DropDownHeader>
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

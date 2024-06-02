import React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native';

import * as S from './styles';

type InputProps = TextInputProps & {
  label: string;
};

export const Input = ({ label, onBlur, onFocus, ...restProps }: InputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const onBlurCustomized = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    typeof onBlur === 'function' && onBlur(e) 
  };

  const onFocusCustomized = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    typeof onFocus === 'function' && onFocus(e)
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        {...restProps}
        isFocused={isFocused}
        onBlur={onBlurCustomized}
        onFocus={onFocusCustomized}
      />
    </S.Container>
  );
};

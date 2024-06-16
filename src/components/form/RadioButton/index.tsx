import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type RadioButtonProps = TouchableOpacityProps & {
  variant: S.RadioButtonVariantStyledProps;
  state?: S.RadioButtonStateStyledProps;
}

export const RadioButton = ({ variant = 'positive', state = 'default', children, ...restProps }: RadioButtonProps) => {
  return (
    <S.RadioButton {...restProps} variant={variant} state={state}>
      <S.Circle variant={variant} />
      <S.RadioButtonText>{children}</S.RadioButtonText>
    </S.RadioButton>
  );
};

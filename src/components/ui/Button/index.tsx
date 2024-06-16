import React from 'react';
import { TouchableHighlightProps } from 'react-native';

import * as S from './styles';

type ButtonProps = TouchableHighlightProps & {
  variant?: S.ButtonVariantStyledProps;
  iconName?: S.IconPropsStyled['name'];
}

export const Button = ({ variant = 'primary', iconName, children, ...restProps }: ButtonProps) => {
  return (
    <S.Button variant={variant} {...restProps}>
      <S.ButtonContent>
        {iconName && (
          <S.Icon variant={variant} name={iconName} />
        )}
        <S.ButtonText variant={variant}>{children}</S.ButtonText>
      </S.ButtonContent>
    </S.Button>
  );
};

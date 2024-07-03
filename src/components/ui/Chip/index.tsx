import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type ChipProps = TouchableOpacityProps & {
  variant: S.ChipVariantStyledProps;
}

export const Chip = ({ variant = 'positive', children }: ChipProps) => {
  return (
    <S.Chip variant={variant}>
      <S.Circle variant={variant} />
      <S.ChipText>{variant === 'positive' ? 'dentro' : 'fora'} da dieta</S.ChipText>
    </S.Chip>
  );
};

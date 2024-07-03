import React from 'react';
import { PressableProps } from 'react-native';

import { formatTime } from '@/utils/formatDate';

import * as S from './styles';

export type MealOfTheDayCardProps = PressableProps & {
  variant?: S.MealOfTheDayCardVariantStyledProps;
  time: Date;
  title: string;
}

const MealOfTheDayCard = ({ variant = 'positive', time, title, ...pressableProps }: MealOfTheDayCardProps) => {
  return (
    <S.Container {...pressableProps}>
      <S.Time>{time &&  formatTime(time)}</S.Time>
      <S.VSeparator />
      <S.TextValue>{title}</S.TextValue>
      <S.StatusIndicator variant={variant} />
    </S.Container>
  );
};

export default MealOfTheDayCard;
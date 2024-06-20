import React from 'react';

import { formatTime } from '@/utils/formatDate';

import * as S from './styles';

export type MealOfTheDayCardProps = {
  variant?: S.MealOfTheDayCardVariantStyledProps;
  time: Date;
  title: string;
}

const MealOfTheDayCard = ({ variant = 'positive', time, title }: MealOfTheDayCardProps) => {
  return (
    <S.Container>
      <S.Time>{time &&  formatTime(time)}</S.Time>
      <S.VSeparator />
      <S.TextValue>{title}</S.TextValue>
      <S.StatusIndicator variant={variant} />
    </S.Container>
  );
};

export default MealOfTheDayCard;
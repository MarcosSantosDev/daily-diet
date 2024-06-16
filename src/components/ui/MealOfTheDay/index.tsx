import React from 'react';
import { format } from 'date-fns';

import * as S from './styles';

type MealOfTheDayProps = {
  variant?: S.MealOfTheDayVariantStyledProps;
  time: Date;
  title: string;
}

const MealOfTheDay = ({ variant = 'positive', time, title }: MealOfTheDayProps) => {
  return (
    <S.Container>
      <S.Time>{time &&  format(time, "HH:mm")}</S.Time>
      <S.VSeparator />
      <S.TextValue>{title}</S.TextValue>
      <S.StatusIndicator variant={variant} />
    </S.Container>
  );
};

export default MealOfTheDay;
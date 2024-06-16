import React from 'react';

import * as S from './styles';

type StatisticsCardProps = {
  variant?: S.StatisticsCardVariantStyledProps;
  title: string;
  subTitle: string;
}

const StatisticsCard = ({ variant = 'default', title, subTitle }: StatisticsCardProps) => {
  return (
    <S.Container variant={variant}>
      <S.TextTitle>{title}</S.TextTitle>      
      <S.TextSubTitle>{subTitle}</S.TextSubTitle>      
    </S.Container>
  );
};

export default StatisticsCard;
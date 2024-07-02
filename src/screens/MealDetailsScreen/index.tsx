import { useNavigation } from '@react-navigation/native';

import { StatisticsCard } from '@/components/context/MealDetails';

import * as S from './styles';

type MealVariant = "positive" | "negative"

export const MealDetailsScreen = () => {
  const navigation = useNavigation()

  const backToMealsPanel = () => {
    navigation.navigate('MealPanel');
  }

  const variant: MealVariant = 'negative'

  return (
    <S.Container variant={variant}>
      <S.MealHeaderContainer>
        <S.IconPressable onPress={backToMealsPanel}>
          <S.ArrowLeftIcon  variant={variant} />
        </S.IconPressable>
        <S.MealHeaderTitle>90,89%</S.MealHeaderTitle>
        <S.MealHeaderSubTitle>das refeições dentro da lista</S.MealHeaderSubTitle>
      </S.MealHeaderContainer>
      <S.MealBodyContainer>
        <S.MealBodyTitle>Estatísticas gerais</S.MealBodyTitle>
        
        <S.MealBodyContent>
          <StatisticsCard
            title='22'
            subTitle='melhor sequência de pratos dentro da dieta'
          />
        </S.MealBodyContent>
        <S.MealBodyContent>
          <StatisticsCard
            title='109'
            subTitle='refeições registradas'
          />
        </S.MealBodyContent>
        <S.MealBodyContent>
          <StatisticsCard
            variant='positive'
            title='99'
            subTitle='refeições dentro da dieta'
          />
          <StatisticsCard
            variant='negative'
            title='10'
            subTitle='refeições fora da dieta'
          />
        </S.MealBodyContent>
      </S.MealBodyContainer>
    </S.Container>
  );
};

import Avatar from "@/components/ui/Avatar";
import { mealPanelScreenMock } from "@/__mocks__/mealPanelScreen";

import StatisticPanel from "./components/StatisticPanel";
import Meals from "./components/Meals";

import * as S from "./styles";
import { Button } from "@/components/ui/Button";
import { useNavigation } from "@react-navigation/native";

export const MealPanelScreen = () => {
  const navigation = useNavigation();

  const navigateToMealRegistration = () => navigation.navigate('MealRegistrationScreen');

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Image source={require('../../../assets/app/logo.png')} />
        <Avatar uri="https://github.com/MarcosSantosDev.png" size={40} />
      </S.HeaderContainer>

      <StatisticPanel percentage={mealPanelScreenMock.generalPercentage} />

      <S.ActionContent>
        <S.ActionTitle>Refeições</S.ActionTitle>
        <Button
          iconName="add"
          variant="primary"
          onPress={navigateToMealRegistration}
        >
          Nova refeição
        </Button>
      </S.ActionContent>

      <Meals data={mealPanelScreenMock.meals} />
    </S.Container>
  );
};

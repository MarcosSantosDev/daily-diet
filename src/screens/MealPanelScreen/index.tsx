import Avatar from "@/components/ui/Avatar";
import { mealPanelScreenMock } from "@/__mocks__/mealPanelScreen";

import StatisticPanel from "./components/StatisticPanel";
import Meals from "./components/Meals";

import * as S from "./styles";
import { Button } from "@/components/ui/Button";

export const MealPanelScreen = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Image source={require('../../../assets/app/logo.png')} />
        <Avatar uri="https://github.com/MarcosSantosDev.png" size={40} />
      </S.HeaderContainer>

      <StatisticPanel percentage={mealPanelScreenMock.generalPercentage} />

      <S.FormActionContainer>
        <S.FormActionTitle>Refeições</S.FormActionTitle>
        <Button
          iconName="add"
          variant="primary"
        >
          Nova refeição
        </Button>
      </S.FormActionContainer>

      <Meals data={mealPanelScreenMock.meals} />
    </S.Container>
  );
};

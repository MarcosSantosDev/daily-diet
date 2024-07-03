import { formatDateSeparetedByDots } from "@/utils/formatDate";
import type { MealsOfTheDayType } from "@/@types/screen/meals";

import MealOfTheDayCard from "../MealOfTheDayCard";

import * as S from "./styles";

type MealsOfTheDayProps = MealsOfTheDayType;

const MealsOfTheDay = ({ mealDate, mealsOfTheDay = [], goToMealSummary }: MealsOfTheDayProps) => {
  return (
    <S.Container>
      <S.DateText>{formatDateSeparetedByDots(mealDate)}</S.DateText>
      <S.MealsOfTheDayGroupCards>
        {mealsOfTheDay.map((meal, index) => (
          <MealOfTheDayCard
            key={meal.time.getTime()}
            time={meal.time}
            title={meal.title}
            variant={meal.good ? "positive" : "negative"}
            onPress={() => goToMealSummary(index.toString())}
          />
        ))}
      </S.MealsOfTheDayGroupCards>
    </S.Container>
  );
};

export default MealsOfTheDay
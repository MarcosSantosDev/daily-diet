import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MealsOfTheDay } from "@/components/context/MealPanel";
import type { MealsOfTheDayType } from "@/@types/screen/meals";

type MealsProps = {
  data: MealsOfTheDayType[];
}

const Meals = ({ data }: MealsProps) => {
  const navigation = useNavigation();

  const goToMealSummary = (mealId: string) =>{
    navigation.navigate('MealSummaryScreen', {
      mealId
    })
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }: { item: MealsOfTheDayType }) => (
        <MealsOfTheDay key={item.mealDate.getTime()} mealDate={item.mealDate} mealsOfTheDay={item.mealsOfTheDay} goToMealSummary={goToMealSummary} />
      )}
      keyExtractor={item => item.mealDate.getTime().toString()}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default Meals;

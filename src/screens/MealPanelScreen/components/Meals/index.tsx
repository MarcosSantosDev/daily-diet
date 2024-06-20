import { FlatList } from "react-native";

import MealsOfTheDay from "@/components/context/MealsOfTheDay";
import type { MealsOfTheDayType } from "@/@types/screen/meals";

type MealsProps = {
  data: MealsOfTheDayType[];
}

const Meals = ({ data }: MealsProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }: { item: MealsOfTheDayType }) => (
        <MealsOfTheDay key={item.mealDate.getTime()} mealDate={item.mealDate} mealsOfTheDay={item.mealsOfTheDay} />
      )}
      keyExtractor={item => item.mealDate.getTime().toString()}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default Meals;

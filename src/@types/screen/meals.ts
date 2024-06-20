export type MealOfTheDayType = {
  time: Date;
  title: string;
  good: boolean;
};

export type MealsOfTheDayType = {
  mealDate: Date;
  mealsOfTheDay: MealOfTheDayType[];
};

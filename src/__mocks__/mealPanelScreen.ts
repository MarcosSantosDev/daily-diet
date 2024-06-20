import type { MealsOfTheDayType, MealOfTheDayType } from "@/@types/screen/meals";

/**
 * Generates a random boolean value.
 * 
 * @returns {boolean} Random boolean value.
 */
function getRandomBoolean(): boolean {
  return Math.random() >= 0.5;
}

/**
 * Generates a random date within the current year.
 * 
 * @returns {Date} Random date within the current year.
 */
function getRandomDate(): Date {
  const start = new Date(new Date().getFullYear(), 0, 1);
  const end = new Date(new Date().getFullYear(), 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/**
 * Generates a random title for a meal.
 * 
 * @returns {string} Random meal title.
 */
function getRandomMealTitle(): string {
  const titles = ['Healthy Food', 'Unhealthy Food', 'Snack', 'Drink', 'Fruit'];
  return titles[Math.floor(Math.random() * titles.length)];
}

/**
 * Generates a random meal of the day.
 * 
 * @returns {object} Random meal of the day object.
 */
function generateRandomMealOfTheDay(): MealOfTheDayType {
  return {
    title: getRandomMealTitle(),
    time: getRandomDate(),
    good: getRandomBoolean()
  };
}

type MealsPanelScreenMock = {
  generalPercentage: number;
  meals: MealsOfTheDayType[];
}

/**
 * Generates a random mock object based on the given model.
 * 
 * @param {number} mealCount - The number of meals to generate.
 * @param {number} mealsOfTheDayCount - The number of meals of the day to generate for each meal.
 * @returns {object} Randomly generated mock object.
 */
function generateRandomMealsPanelScreenMock(mealCount: number, mealsOfTheDayCount: number): MealsPanelScreenMock {
  const meals = [];

  for (let i = 0; i < mealCount; i++) {
    const mealsOfTheDay = [];
    
    for (let j = 0; j < mealsOfTheDayCount; j++) {
      mealsOfTheDay.push(generateRandomMealOfTheDay());
    }

    meals.push({
      mealDate: getRandomDate(),
      mealsOfTheDay: mealsOfTheDay
    });
  }

  return {
    generalPercentage: Math.floor(Math.random() * 101) / 100, // Random percentage between 0 and 100
    meals: meals
  };
}

export const mealPanelScreenMock = generateRandomMealsPanelScreenMock(5, 4);

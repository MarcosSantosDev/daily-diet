export type MealPanelScreenProps = undefined;

export type MealDetailsScreenProps = undefined;

export type MealRegistrationScreenProps = undefined;

export type MealEditScreenProps = { mealId: string };

export type MealSummaryScreenProps = { mealId: string };

export type RegistrationFeedbackScreenProps = { feedback: 'positive' | 'negative' };

export type RootStackParamList = {
  MealPanelScreen: MealPanelScreenProps;
  MealDetailsScreen: MealDetailsScreenProps;
  MealRegistrationScreen: MealRegistrationScreenProps;
  MealEditScreen: MealEditScreenProps;
  MealSummaryScreen: MealSummaryScreenProps;
  RegistrationFeedbackScreen: RegistrationFeedbackScreenProps;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
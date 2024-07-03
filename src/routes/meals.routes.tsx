import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@/@types/app/navigation';

import { MealPanelScreen } from '@/screens/MealPanelScreen'
import { MealRegistrationScreen } from '@/screens/MealRegistrationScreen'
import { MealEditScreen } from '@/screens/MealEditScreen'
import { MealDetailsScreen } from '@/screens/MealDetailsScreen'
import { MealSummaryScreen } from '@/screens/MealSummaryScreen';
import { RegistrationFeedbackScreen } from '@/screens/RegistrationFeedbackScreen'

const Stack = createNativeStackNavigator<RootStackParamList>();

export const DietsRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='MealPanelScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MealPanelScreen" component={MealPanelScreen} />
      <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
      <Stack.Screen name="MealRegistrationScreen" component={MealRegistrationScreen} />
      <Stack.Screen name="MealEditScreen" component={MealEditScreen} />
      <Stack.Screen name="MealSummaryScreen" component={MealSummaryScreen} />
      <Stack.Screen name="RegistrationFeedbackScreen" component={RegistrationFeedbackScreen} />
    </Stack.Navigator>
  );
};
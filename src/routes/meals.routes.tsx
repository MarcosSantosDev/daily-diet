import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MealPanelScreen } from '@/screens/MealPanelScreen'
import { MealRegistrationScreen } from '@/screens/MealRegistrationScreen'
import { RegistrationFeedbackScreen } from '@/screens/RegistrationFeedbackScreen'
import { MealDetailsScreen } from '@/screens/MealDetailsScreen'

const Stack = createNativeStackNavigator();

export const DietsRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='MealPanel' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MealPanel" component={MealPanelScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      <Stack.Screen name="MealRegistration" component={MealRegistrationScreen} />
      <Stack.Screen name="RegistrationFeedback" component={RegistrationFeedbackScreen} />
    </Stack.Navigator>
  );
};
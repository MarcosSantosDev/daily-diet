import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { DietsRoutes } from './meals.routes';

export const Routes = () => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.white['1'] }}>
      <NavigationContainer>
        <DietsRoutes />
      </NavigationContainer>
    </View>
  );
};


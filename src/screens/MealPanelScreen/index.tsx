import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { House } from 'phosphor-react-native';

import * as S from './styles';

export const MealPanelScreen = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <House size={32} weight='fill' />
      <S.Text>
        Página inicial
      </S.Text>
      <Button
        title="Cadastrar nova refeição"
        onPress={() => navigation.navigate('MealRegistration')}
      />
    </S.Container>
  );
};

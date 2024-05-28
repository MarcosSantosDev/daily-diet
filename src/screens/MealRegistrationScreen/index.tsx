import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TrademarkRegistered } from 'phosphor-react-native';

import * as S from './styles';

export const MealRegistrationScreen = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <TrademarkRegistered size={32} weight='fill' />
      <S.Text>
        Página de registro de refeição
      </S.Text>
      <Button
        title="Ir para feedback"
        onPress={() => navigation.navigate('RegistrationFeedback')}
      />
    </S.Container>
  );
};

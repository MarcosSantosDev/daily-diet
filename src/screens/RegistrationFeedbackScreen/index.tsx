import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckCircle } from 'phosphor-react-native';

import * as S from './styles';

export const RegistrationFeedbackScreen = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <CheckCircle size={32} weight='fill' />
      <S.Text>
        Página de feedback de registro
      </S.Text>
      <Button
        title="Voltar para pagina principal"
        onPress={() => navigation.navigate('MealPanel')}
      />
    </S.Container>
  );
};

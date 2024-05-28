import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MoonStars } from 'phosphor-react-native';

import * as S from './styles';

export const MealDetailsScreen = () => {
  const navigation = useNavigation()

  return (
    <S.Container>
      <MoonStars size={32} weight='fill' />
      <S.Text>
        Página de detalhes da refeição
      </S.Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </S.Container>
  );
};

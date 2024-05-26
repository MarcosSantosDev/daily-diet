import { House } from 'phosphor-react-native';

import * as S from './styles';

export const HomeScreen = () => {
  return (
    <S.Container>
      <House size={32} weight='fill' />
      <S.Text>
        Página inicial
      </S.Text>
    </S.Container>
  );
};

import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '@/components/ui/Button';
import { RootStackParamList } from '@/@types/app/navigation';

import * as S from './styles';

export const RegistrationFeedbackScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'RegistrationFeedbackScreen'>) => {
  const backToMealsPanel = () => navigation.navigate('MealPanelScreen');

  const isPositive = route.params.feedback === 'positive';

  return (
    <S.Container>
      <S.Titles>
        <S.Title variant={route.params.feedback}>
          {isPositive ? "Continue assim!" : "Que pena!"}
        </S.Title>
        <S.TextOnRow>
          {isPositive ? (
            <S.Subtitle>Você continua <S.Bold> dentro da dieta</S.Bold> . Muito bem!</S.Subtitle>
          ) : (
            <S.Subtitle>Você<S.Bold> saiu da dieta</S.Bold>, dessa vez, mas continue se esforçando e não desista!</S.Subtitle>
          )}
        </S.TextOnRow>
      </S.Titles>

      <S.ImageIlustration
        source={
          isPositive
            ? require('../../../assets/app/positiveIllustration.png')
            : require('../../../assets/app/negativeIllustration.png')
        }
      />

      <Button variant='primary' onPress={backToMealsPanel}>
        Ir para a página inicial
      </Button>
    </S.Container>
  );
};

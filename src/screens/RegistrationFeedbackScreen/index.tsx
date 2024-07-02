import { useNavigation } from '@react-navigation/native';

import { Button } from '@/components/ui/Button';

import * as S from './styles';

export const RegistrationFeedbackScreen = () => {
  const navigation = useNavigation()

  const positive = true;

  return (
    <S.Container>
      <S.Titles>
        <S.Title variant={positive ? "positive" : "negative"}>
          {positive ? "Continue assim!" : "Que pena!"}
        </S.Title>
        <S.TextOnRow>
          {positive ? (
            <S.Subtitle>Você continua <S.Bold> dentro da dieta</S.Bold> . Muito bem!</S.Subtitle>
          ) : (
            <S.Subtitle>Você<S.Bold> saiu da dieta</S.Bold>, dessa vez, mas continue se esforçando e não desista!</S.Subtitle>
          )}
        </S.TextOnRow>
      </S.Titles>

      <S.ImageIlustration
        source={
          positive
            ? require('../../../assets/app/positiveIllustration.png')
            : require('../../../assets/app/negativeIllustration.png')
        }
      />

      <Button
        variant='primary'
        onPress={() => navigation.navigate('MealPanel')}
      >
        Ir para a página inicial
      </Button>
    </S.Container>
  );
};

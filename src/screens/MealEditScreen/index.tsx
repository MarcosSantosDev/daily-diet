import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@/components/form/Input';
import { DateInput } from '@/components/form/DateInput';
import { RadioButton } from '@/components/form/RadioButton';
import { Button } from '@/components/ui/Button';

import * as S from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/@types/app/navigation';

type EditMealMockedType = {
  name: string;
  description: string;
  dateTime: Date;
  dietStatus: 'positive' | 'negative';
}

const editMealMocked: EditMealMockedType = {
  name: 'Sanduíche',
  description: 'Sanduíche',
  dateTime: new Date(),
  dietStatus: 'positive'
}

export const MealEditScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'MealEditScreen'>) => {
  const [dietIsOk, setDietIsOk] = useState(editMealMocked.dietStatus === 'positive');
  
  const handleGoToMealPanel = () => navigation.goBack();

  const handleGoToRegistrationFeedback = () => navigation.navigate('RegistrationFeedbackScreen', {
    feedback: dietIsOk ? 'positive' : 'negative'
  });

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.IconPressable onPress={handleGoToMealPanel}>
          <S.ArrowLeftIcon />
        </S.IconPressable>
        <S.HeaderTitle>Refeição {route.params.mealId}</S.HeaderTitle>
      </S.HeaderContainer>

      <S.FormContainer>
        <S.FieldsContent>
          <Input label='Nome' value={editMealMocked.name} />
          <Input label='Descrição' multiline numberOfLines={5} value={editMealMocked.description} />        
          <S.DateInputsContent>
            <DateInput label='Data' mode='date' dateValue={new Date()} />
            <DateInput label='Hora' mode='time' dateValue={new Date()} />
          </S.DateInputsContent>
          <S.RadioButtonsContent>
            <S.RadioButtonsLabel>Está dentro da dieta?</S.RadioButtonsLabel>
            <S.RadioButtonsFlexContent>
              <RadioButton
                variant='positive'
                onPress={() => {
                  setDietIsOk(true);
                }}
                state={dietIsOk ? 'active': 'default'}
              >
                Sim
              </RadioButton>
              <RadioButton
                variant='negative'
                onPress={() => {
                  setDietIsOk(false);
                }}
                state={!dietIsOk ? 'active': 'default'}
              >
                Não
              </RadioButton>
            </S.RadioButtonsFlexContent>
          </S.RadioButtonsContent>
        </S.FieldsContent>
  
        <Button variant='primary' onPress={handleGoToRegistrationFeedback}>Salvar alterações</Button>
      </S.FormContainer>
    </S.Container>
  );
};

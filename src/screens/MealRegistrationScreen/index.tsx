import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@/components/form/Input';
import { DateInput } from '@/components/form/DateInput';
import { RadioButton } from '@/components/form/RadioButton';
import { Button } from '@/components/ui/Button';

import * as S from './styles';

export const MealRegistrationScreen = () => {
  const navigation = useNavigation()

  const [dietRadioButton, setDietRadioButton] = useState(false);
  
  const handleGoToMealPanel = () => navigation.navigate('MealPanel')

  const handleGoToRegistrationFeedback = () => navigation.navigate('RegistrationFeedback')

  return (
    <S.Container>
      <S.NewMealHeaderContainer>
        <S.IconPressable onPress={handleGoToMealPanel}>
          <S.ArrowLeftIcon />
        </S.IconPressable>
        <S.NewMealHeaderTitle>Nova refeição</S.NewMealHeaderTitle>
      </S.NewMealHeaderContainer>

      <S.FormContainer>
        <S.FieldsContent>
          <Input label='Nome' />
          <Input label='Descrição' multiline numberOfLines={5} />        
          <S.DateInputsContent>
            <DateInput label='Data' mode='date' />
            <DateInput label='Hora' mode='time' />
          </S.DateInputsContent>
          <S.RadioButtonsContent>
            <S.RadioButtonsLabel>Está dentro da dieta?</S.RadioButtonsLabel>
            <S.RadioButtonsFlexContent>
              <RadioButton
                variant='positive'
                onPress={() => {
                  setDietRadioButton(true);
                }}
                state={dietRadioButton ? 'active': 'default'}
              >
                Sim
              </RadioButton>
              <RadioButton
                variant='negative'
                onPress={() => {
                  setDietRadioButton(false);
                }}
                state={!dietRadioButton ? 'active': 'default'}
              >
                Não
              </RadioButton>
            </S.RadioButtonsFlexContent>
          </S.RadioButtonsContent>
        </S.FieldsContent>
  
        <Button variant='primary' onPress={handleGoToRegistrationFeedback}>Cadastrar refeição</Button>
      </S.FormContainer>
    </S.Container>
  );
};

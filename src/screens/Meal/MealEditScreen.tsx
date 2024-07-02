import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@/components/form/Input';
import { DateInput } from '@/components/form/DateInput';
import { RadioButton } from '@/components/form/RadioButton';
import { Button } from '@/components/ui/Button';

import * as S from './styles';

const editMealMocked = {
  name: 'Sanduíche',
  description: 'Sanduíche',
  dateTime: new Date(),
  dietStatus: 'positive'
}

export const MealEditScreen = () => {
  const navigation = useNavigation()

  const [dietRadioButton, setDietRadioButton] = useState(editMealMocked.dietStatus === 'positive');
  
  const handleGoToMealPanel = () => navigation.navigate('MealPanel')

  const handleGoToRegistrationFeedback = () => navigation.navigate('RegistrationFeedback')

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.IconPressable onPress={handleGoToMealPanel}>
          <S.ArrowLeftIcon />
        </S.IconPressable>
        <S.HeaderTitle>Editar refeição</S.HeaderTitle>
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
  
        <Button variant='primary' onPress={handleGoToRegistrationFeedback}>Salvar alterações</Button>
      </S.FormContainer>
    </S.Container>
  );
};

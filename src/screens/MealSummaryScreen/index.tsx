import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { RootStackParamList } from '@/@types/app/navigation';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import ConfirmationDialog from '@/components/context/MealSummary/ConfirmationDialog';

import * as S from './styles';

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

export const MealSummaryScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'MealSummaryScreen'>) => {
  const [openRemoveConfirmationDialog, setOpenRemoveConfirmationDialog] = useState(false);
  
  const handleOpenRemoveConfirmationDialog = () => {
    setOpenRemoveConfirmationDialog(true);
  }

  const onCloseRemoveConfirmationDialog = () => {
    setOpenRemoveConfirmationDialog(false);
  }

  const onCancelRemoveConfirmationDialog = () => {
    onCloseRemoveConfirmationDialog();
  }

  const onConfirmRemoveConfirmationDialog = () => {
    onCloseRemoveConfirmationDialog();
  }

  const handleGoToMealPanel = () => navigation.goBack();

  const handleGoToRegistrationFeedback = () => navigation.navigate('MealEditScreen', {
    mealId: route.params.mealId
  });

  return (
    <>
      <S.Container>
        <S.HeaderContainer>
          <S.IconPressable onPress={handleGoToMealPanel}>
            <S.ArrowLeftIcon />
          </S.IconPressable>
          <S.HeaderTitle>Refeição {route.params.mealId}</S.HeaderTitle>
        </S.HeaderContainer>
        <S.SummaryContainer>
          <S.SummaryDetails>
            <S.MealDetails>
              <S.MealName>Sanduíche</S.MealName>
              <S.MealDescription>Sanduíche de pão integral com atum e salada de alface e tomate</S.MealDescription>
            </S.MealDetails>
            <S.MealDetails>
              <S.MealDateLabel>Data e hora</S.MealDateLabel>
              <S.MealDateTime>12/08/2022 ás 16:00</S.MealDateTime>
            </S.MealDetails>

            <Chip variant={editMealMocked.dietStatus} />
          </S.SummaryDetails>
          <S.GroupButtons>
            <Button variant='primary' iconName="edit" onPress={handleGoToRegistrationFeedback}>Editar refeição</Button>
            <Button variant='secondary' iconName='delete' onPress={handleOpenRemoveConfirmationDialog}>Excluir refeição</Button>
          </S.GroupButtons>
        </S.SummaryContainer>
      </S.Container>
      <ConfirmationDialog
        openDialog={openRemoveConfirmationDialog}
        onCloseDialog={onCancelRemoveConfirmationDialog}
        onCancelDialog={onCancelRemoveConfirmationDialog}
        onConfirmDialog={onConfirmRemoveConfirmationDialog} 
      />
    </>
  );
};

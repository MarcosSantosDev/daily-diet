import { SafeAreaView } from "react-native-safe-area-context"
import styled, { css } from "styled-components/native"
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[5]}; 
`;

export const NewMealHeaderContainer = styled.View`
  ${({ theme }) => css`
    position: relative;
    padding: 28px 0px;
  `}
`;

export const IconPressable = styled.Pressable`
  width: min-width;
  height: min-height;

  position: absolute;
  left: 10px;
  top: 10px;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[2] 
}))`
  position: absolute;
  left: 20px;
  top: 20px;
`

export const NewMealHeaderTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.LARGE}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const FormContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white[1]};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 32px 24px;
  `}
`;

export const FieldsContent = styled.View`
  ${({ theme }) => css`
    flex: 1;
    gap: 24px;
  `}
`;

export const DateInputsContent = styled.View`
  ${() => css`
    width: 100%;
    flex-direction: row;
    gap: 16px;
  `}
`;

export const RadioButtonsContent = styled.View`
  ${() => css`
    width: 100%;
    flex-direction: column;
    gap: 8px;
  `}
`;

export const RadioButtonsLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.MD}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const RadioButtonsFlexContent = styled.View`
  ${() => css`
    width: 100%;
    flex-direction: row;
    gap: 8px;
  `}
`;

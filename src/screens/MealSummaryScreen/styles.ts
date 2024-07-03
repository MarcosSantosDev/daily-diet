import { SafeAreaView } from "react-native-safe-area-context"
import styled, { css } from "styled-components/native"
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[5]};
`;

export const HeaderContainer = styled.View`
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
  z-index: 1;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray[2] 
}))`
  position: absolute;
  left: 20px;
  top: 20px;
`

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.LARGE}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const SummaryContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white[1]};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 32px 24px;
  `}
`;

export const SummaryDetails = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: column;
    aling-items: start;
    gap: 24px;
  `}
`;

export const MealDetails = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    aling-items: start;
    gap: 8px;
  `}
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.LARGE}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.REGULAR};
    font-size: ${theme.font.size.SM}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const MealDateLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.MD}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const MealDateTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.REGULAR};
    font-size: ${theme.font.size.SM}px;
    color: ${theme.colors.gray[1]};
  `}
`;


export const GroupButtons = styled.View`
  ${() => css`
    gap: 8px;
  `}
`;
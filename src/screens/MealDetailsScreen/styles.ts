import { SafeAreaView } from "react-native-safe-area-context"
import styled, { DefaultTheme, css } from "styled-components/native"
import { ArrowLeft } from 'phosphor-react-native';

type MealVariantStyledProps = "positive" | "negative";

const containerVariantStyles = (theme: DefaultTheme, variant: MealVariantStyledProps) =>
  ({
    positive: css`
      background-color: ${theme.colors.green[3]};
    `,
    negative: css`
      background-color: ${theme.colors.red[3]}; 
    `,
  }[variant]);

export const Container = styled(SafeAreaView)<{ variant: MealVariantStyledProps }>`
  flex: 1;
	${({ theme, variant }) => containerVariantStyles(theme, variant)};
`;

export const MealHeaderContainer = styled.View`
  ${({ theme }) => css`
    padding: 20px;
    padding-bottom: 32px;
  `}
`;

export const IconPressable = styled.Pressable`
  width: min-width;
  height: min-height;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs<{ variant: MealVariantStyledProps }>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'positive' ? theme.colors.green[1] : theme.colors.red[1] 
}))`
`

export const MealHeaderTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.XX_LARGE}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const MealHeaderSubTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family.REGULAR};
    font-size: ${theme.font.size.SM}px;
    color: ${theme.colors.gray[2]};
  `}
`;

export const MealBodyContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    gap: 16px;
  	background-color: ${({ theme }) => theme.colors.white[1]};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 24px;
  `}
`;

export const MealBodyContent = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    gap: 16px;
  `}
`;

export const MealBodyTitle = styled.Text`
  ${({ theme }) => css`
    width: 100%;
    padding: 10px 0;
    text-align: center;
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.SM}px;
    color: ${theme.colors.gray[2]};
  `}
`;


import styled, { DefaultTheme, css } from "styled-components/native"

export type MealOfTheDayCardVariantStyledProps = 'positive' | 'negative';

export type MealOfTheDayCardStyledProps = {
  variant: MealOfTheDayCardVariantStyledProps;
};

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    padding: 14px 12px;
    border: 1px solid ${theme.colors.gray['5']};
    border-radius: 6px;
    background-color: ${theme.colors.white['1']};
  `}
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray['1']};
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.SM}px;
  `}
`;

export const TextValue = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.colors.gray['2']};
    font-family: ${theme.font.family.REGULAR};
    font-size: ${theme.font.size.SM}px;

    inline-size: 90%;
    overflow-wrap: break-word;
  `}
`;

const statusIndicatorVariantStyles = (theme: DefaultTheme, variant: MealOfTheDayCardVariantStyledProps) =>
  ({
    positive: css`
      background-color: ${theme.colors.green['2']};
    `,
    negative: css`
      background-color: ${theme.colors.red['2']}; 
    `,
  }[variant]);

export const StatusIndicator = styled.View<MealOfTheDayCardStyledProps>`
  width: 14px;
  height: 14px;
  border-radius: 20px;
  ${({ theme, variant }) => statusIndicatorVariantStyles(theme, variant)}
`;

export const VSeparator = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme}) => theme.colors.gray['5']};
`;
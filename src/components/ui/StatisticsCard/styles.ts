import { Text, View } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native"

export type StatisticsCardVariantStyledProps = 'default' | 'positive' | 'negative';

export type StatisticsCardStyledProps = {
  variant: StatisticsCardVariantStyledProps;
};

const containerVariantStyles = (theme: DefaultTheme, variant: StatisticsCardVariantStyledProps) =>
  ({
    default: css`
      background-color: ${theme.colors.gray['6']};
    `,
    positive: css`
      background-color: ${theme.colors.green['3']};
    `,
    negative: css`
      background-color: ${theme.colors.red['3']}; 
    `,
  }[variant]);

export const Container = styled(View)<StatisticsCardStyledProps>`
  gap: 8px;

  padding: 16px;
  border-radius: 8px;
  align-items: center;

  ${({ theme, variant }) => containerVariantStyles(theme, variant)}
`;


export const TextTitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.X_LARGE}px;

    inline-size: 90%;
    overflow-wrap: break-word;
  `}
`;

export const TextSubTitle = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
    font-family: ${theme.font.family.REGULAR};
    font-size: ${theme.font.size.SM}px;

    inline-size: 90%;
    overflow-wrap: break-word;
  `}
`;

import styled, { css } from 'styled-components/native';

export type ChipVariantStyledProps = 'positive' | 'negative';

type ChipStyledProps = {
  variant: ChipVariantStyledProps;
}

export const Chip = styled.View<ChipStyledProps>`
  ${({ theme, variant }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    width: 50%;
    border-radius: 20px;
    background-color: ${variant === 'positive' ? theme.colors.green[3] : theme.colors.red[3]};
  `}
`;

export const Circle = styled.View<{ variant: ChipVariantStyledProps }>`
  ${({ theme, variant }) => css`
    width: 8px;
    height: 8px;
    background-color: ${variant === 'positive' ? theme.colors.green['1'] : theme.colors.red['1']};
    border-radius: 20px
  `}
`;

export const ChipText = styled.Text`
  ${({ theme }) => css`
    width: auto;
    font-size: ${theme.font.size.MD}px;
    font-family: ${theme.font.family.BOLD};
    color: ${theme.colors.gray[1]}; 
  `}
`;


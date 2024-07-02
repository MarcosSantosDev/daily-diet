import { Text, TouchableOpacity } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export type RadioButtonVariantStyledProps = 'positive' | 'negative';

export type RadioButtonStateStyledProps = 'default' | 'active';

type RadioButtonStyledProps = {
  variant: RadioButtonVariantStyledProps;
  state: RadioButtonStateStyledProps;
}

const radioButtonContainerVariantStyles = (theme: DefaultTheme, { variant, state }: RadioButtonStyledProps) =>
({
  default: css`
    background-color: ${theme.colors.gray['6']};
  `,
  active: css`
    border-width: 1px;
    border-style: solid;
    border-color: ${variant === 'positive' ? theme.colors.green['1'] : theme.colors.red['1']};
    background-color: ${variant === 'positive' ? theme.colors.green['3'] : theme.colors.red['3']};
  `,
}[state]);

export const RadioButton = styled(TouchableOpacity)<RadioButtonStyledProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, variant, state }) => radioButtonContainerVariantStyles(theme, { variant, state })}
`;

export const Circle = styled.View<{ variant: RadioButtonVariantStyledProps }>`
  ${({ theme, variant }) => css`
    width: 8px;
    height: 8px;
    background-color: ${variant === 'positive' ? theme.colors.green['1'] : theme.colors.red['1']};
    border-radius: 20px
  `}
`;

export const RadioButtonText = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.font.size.MD}px;
    font-family: ${theme.font.family.BOLD};
    color: ${theme.colors.gray[1]}; 
  `}
`;

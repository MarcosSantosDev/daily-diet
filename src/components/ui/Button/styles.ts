import { Text, TouchableHighlight } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type ButtonVariantStyledProps = 'primary' | 'secondary';

const buttonContainerVariantStyles = (theme: DefaultTheme, variant: ButtonVariantStyledProps) =>
({
  primary: css`
      background-color: ${theme.colors.gray['2']};
    `,
  secondary: css`
      border: 1px solid ${theme.colors.gray[1]}; 
      background-color: ${theme.colors.white[1]}; 
    `,
}[variant]);

export const Button = styled(TouchableHighlight).attrs<{ variant: ButtonVariantStyledProps }>(({ theme, variant }) => ({
  underlayColor: variant === 'primary' ? theme.colors.gray['1'] : theme.colors.gray['6'],
}))`
  width: 100%;

  padding: 16px 24px;
  border-radius: 6px;

  ${({ theme, variant }) => buttonContainerVariantStyles(theme, variant)}
`;

export const ButtonContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;


const buttonTextVariantStyles = (theme: DefaultTheme, variant: ButtonVariantStyledProps) =>
({
  primary: css`
      color: ${theme.colors.white[1]}; 
    `,
  secondary: css`
      color: ${theme.colors.gray[1]}; 
    `,
}[variant]);

export const ButtonText = styled(Text) <{ variant: ButtonVariantStyledProps }>`
  ${({ theme }) => css`
    font-size: ${theme.font.size.SM}px;
    font-family: ${theme.font.family.BOLD};
  `}

  ${({ theme, variant }) => buttonTextVariantStyles(theme, variant)}
`;

const buttonIconVariantColor = (theme: DefaultTheme, variant: ButtonVariantStyledProps) => {
  switch (variant) {
    case 'primary':
      return theme.colors.white[1]
    case 'secondary':
      return theme.colors.gray[1]
  }
};

export type IconPropsStyled = {
  variant: ButtonVariantStyledProps;
  name?: keyof typeof MaterialIcons.glyphMap;
}

export const Icon = styled(MaterialIcons).attrs<IconPropsStyled>(({ theme, variant, name }) => ({
  size: 18,
  name,
  color: `${buttonIconVariantColor(theme, variant)}`
}))``
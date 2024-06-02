import styled, { css } from 'styled-components/native';

export type RadioButtonVariantStyledProps = 'positive' | 'negative';

export type RadioButtonStateStyledProps = 'default' | 'active';

export const Container = styled.View`
  width: 100%;
  gap: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font.size.MD}px;
    font-family: ${theme.font.family.BOLD};
    color: ${theme.colors.gray[2]};
  `}
`;
  
export const Input = styled.TextInput.attrs(({ theme }) => ({
  cursorColor: theme.colors.gray['1'],
  placeholderTextColor: theme.colors.gray['3'],
}))<{ isFocused: boolean }>`
  ${({ theme, isFocused }) => css`
    width: 100%;
    height: 48px; 
    padding: 14px;

    font-size: ${theme.font.size.MD}px;
    font-family: ${theme.font.family.REGULAR};
    color: ${theme.colors.gray[1]}; 
    background-color: ${theme.colors.white[1]}; 
    border: 1px solid ${isFocused ? theme.colors.gray[3] : theme.colors.gray[5]};
    border-radius: 6px;
  `}
`;

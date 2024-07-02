import { SafeAreaView } from "react-native-safe-area-context"
import styled, { css } from "styled-components/native"

export const Container = styled(SafeAreaView)`
	flex: 1;
  justify-content: center;
  align-items: center;

	background-color: ${({ theme }) => theme.colors.white[1]};
	
  padding: 24px;
  gap: 32px;
`;

export const Titles = styled.View`
  gap: 10px;
`;

export const Title = styled.Text<{ variant: 'positive' | 'negative' }>`
  ${({ theme, variant }) => css`
    text-align: center;
    color: ${variant === 'positive' ? theme.colors.green[1] : theme.colors.red[1]}; 
    font-family: ${theme.font.family.BOLD}; 
    font-size: ${theme.font.size.X_LARGE}px; 
  `}
`;

export const TextOnRow = styled.View`
  flex-direction: row;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray[1]}; 
    font-family: ${theme.font.family.REGULAR}; 
    font-size: ${theme.font.size.MD}px; 
  `}
`;

export const Bold = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[1]}; 
    font-family: ${theme.font.family.BOLD}; 
    font-size: ${theme.font.size.MD}px; 
  `}
`;

export const ImageIlustration = styled.Image`
${({ theme }) => css`
    width: 224px;
    height: 288px;
    color: ${theme.colors.gray[1]}; 
    font-family: ${theme.font.family.BOLD}; 
    font-size: ${theme.font.size.MD}px; 
  `}
`;
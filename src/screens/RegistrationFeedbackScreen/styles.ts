import { SafeAreaView } from "react-native-safe-area-context"
import styled, { css } from "styled-components/native"

export const Container = styled(SafeAreaView)`
	flex: 1;
  justify-content: center;
  align-items: center;

	background-color: ${({ theme }) => theme.colors.white[1]};
	
  padding: 24px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[1]}; 
    font-family: ${theme.font.family.REGULAR}; 
    font-size: ${theme.font.size.LARGE}px; 
  `}
`;
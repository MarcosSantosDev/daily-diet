import { SafeAreaView } from "react-native-safe-area-context"
import styled, { css } from "styled-components/native"

export const Container = styled(SafeAreaView)`
  flex: 1;
  gap: 40px;
	background-color: ${({ theme }) => theme.colors.white[1]};	
  padding: 24px;
`;

export const HeaderContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const Image = styled.Image`
  ${() => css`
    width: 82px;
    height: 37px;
  `}
`;

export const ActionContent = styled.View`
  ${({ theme }) => css`
    gap: 10px;
  `}
`;

export const ActionTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
    font-family: ${theme.font.family.REGULAR};
    font-size: ${theme.font.size.MD}px;
  `}
`;

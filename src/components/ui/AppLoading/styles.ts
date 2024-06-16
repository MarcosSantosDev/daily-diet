import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;

   background-color: ${({ theme }) => theme.colors.white[1]};
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.green['1']
}))``;
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  ${({ theme }) => css`
    margin-bottom: 20px;
    flex-direction: col;
    flex: 1;
    gap: 14px;
  `}
`;

export const DateText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.LARGE}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const MealsOfTheDayGroupCards = styled.View`
  ${({ theme }) => css`
    flex-direction: col;
    gap: 10px;
  `}
`;

import { ArrowUpRight } from 'phosphor-react-native'

import styled, { css } from "styled-components/native"

export const StatisticPanel = styled.Pressable`
  ${({ theme }) => css`
    padding: 24px 16px 20px;
    border-radius: 8px;
    position: relative;
    background-color: ${theme.colors.green[3]};
  `}
`;

export const StatisticPanelTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family.BOLD};
    font-size: ${theme.font.size.XX_LARGE}px;
    color: ${theme.colors.gray[1]};
  `}
`;

export const StatisticPanelSubTitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family.REGULAR};
    font-size: ${theme.font.size.SM}px;
    color: ${theme.colors.gray[2]};
  `}
`;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.green[1]
}))`
  position: absolute;
  top: 10px;
  right: 10px;
`
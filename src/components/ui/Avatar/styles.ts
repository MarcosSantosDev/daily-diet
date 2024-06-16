import styled, { css } from 'styled-components/native';

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image<{ size: number }>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size / 2}px;
  `}
`;

export const AvatarText = styled.Text<{ textSize: number; textColor: string }>`
  ${({ textSize, textColor }) => css`
    margin-top: 8px;
    font-size: ${textSize}px;
    color: ${textColor};
  `}  
`;

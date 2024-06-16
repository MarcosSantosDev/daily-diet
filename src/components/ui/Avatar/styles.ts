import styled, { css } from 'styled-components/native';

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
    
export const AvatarImage = styled.Image<{ size: number }>`
  ${({ theme, size }) => css`
    width: ${size}px;
    height: ${size}px;
    border: 2px solid ${theme.colors.gray[2]};
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

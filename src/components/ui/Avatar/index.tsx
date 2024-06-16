import React from 'react';

import * as S from './styles';
import { useTheme } from 'styled-components/native';

type AvatarProps = {
  uri: string;
  size?: number;
  text?: string;
  textSize?: number;
  textColor?: string;
}

const Avatar = ({ uri, size = 0, text, textSize = 0, textColor }: AvatarProps) => {
  const { colors } = useTheme();

  return (
    <S.AvatarContainer>
      <S.AvatarImage source={{ uri }} size={size} />
      {text && <S.AvatarText textSize={textSize} textColor={textColor ?? colors.gray[1]}>{text}</S.AvatarText>}
    </S.AvatarContainer>
  );
};

export default Avatar;

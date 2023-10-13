import { toTitleCase } from '@utils/Strings';
import React from 'react';
import * as S from './styles';

interface UserProps {
  email: string;
  id: string;
  name: string;
  role: string;
}

const User: React.FC<UserProps> = ({ name, role }) => {
  // Basic checking right now, only using the two props we need
  if (!name || !role) {
    return null;
  }

  const initial = name.charAt(0).toUpperCase();
  return (
    <S.UserRow>
      <S.UserBox>
        <S.UserInitial data-testid="user-initial">{initial}</S.UserInitial>
      </S.UserBox>
      <S.UserInfo>
        <S.UserName>{name}</S.UserName>
        <S.UserRole>{toTitleCase(role)}</S.UserRole>
      </S.UserInfo>
    </S.UserRow>
  );
};

export default User;

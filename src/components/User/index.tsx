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
  const initial = name.charAt(0).toUpperCase();
  return (
    <S.UserRow>
      <S.UserBox>
        <S.UserInitial>{initial}</S.UserInitial>
      </S.UserBox>
      <S.UserInfo>
        <S.UserName>{name}</S.UserName>
        <S.UserRole>{toTitleCase(role)}</S.UserRole>
      </S.UserInfo>
    </S.UserRow>
  );
};

export default User;

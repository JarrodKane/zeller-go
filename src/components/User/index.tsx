import { borderRadius, color, gap } from '@styles/Constants';
import { toTitleCase } from '@utils/Strings';
import React from 'react';
import styled from 'styled-components';

interface UserProps {
  email: string;
  id: string;
  name: string;
  role: string;
}

const UserRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: ${gap.medium};
`;

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: ${borderRadius.small};
  background-color: ${color.info};
`;

const UserInitial = styled.span`
  font-size: 24px;
  color: ${color.light};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap.small};
`;

const UserName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const UserRole = styled.span`
  font-size: 14px;
  color: ${color.secondary};
`;

const User: React.FC<UserProps> = ({ email, id, name, role }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <UserRow>
      <UserBox>
        <UserInitial>{initial}</UserInitial>
      </UserBox>
      <UserInfo>
        <UserName>{name}</UserName>
        <UserRole>{toTitleCase(role)}</UserRole>
      </UserInfo>
    </UserRow>
  );
};

export default User;

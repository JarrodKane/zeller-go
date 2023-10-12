import { borderRadius, color, gap } from '@styles/Constants';
import styled from 'styled-components';

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${gap.medium};
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: ${borderRadius.small};
  background-color: ${color.info};
`;

export const UserInitial = styled.span`
  font-size: 24px;
  color: ${color.light};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap.small};
`;

export const UserName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const UserRole = styled.span`
  font-size: 14px;
  color: ${color.secondary};
`;

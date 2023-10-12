import { padding } from '@styles/Constants';
import React from 'react';
import styled from 'styled-components';


const MainContent = styled.main`
  padding: 0 ${padding.large};
  display: flex;
  flex-direction: row;
`;

interface MainContentProps {
  children: React.ReactNode;
}

const Main: React.FC<MainContentProps> = ({ children }) => {
  return <MainContent>{children}</MainContent>;
};

export default Main;

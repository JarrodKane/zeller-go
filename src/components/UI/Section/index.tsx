import { padding } from '@styles/Constants';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: ReactNode;
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding:  ${padding.medium};
  box-sizing: border-box;
`;

const Section: React.FC<SectionProps> = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;

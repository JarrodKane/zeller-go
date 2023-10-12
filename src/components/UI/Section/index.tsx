import { gap, padding } from '@styles/Constants';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: ReactNode;
  gap?: keyof typeof gap;
}

const SectionWrapper = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding:  ${padding.medium};
  box-sizing: border-box;
  gap: ${props => (props.gap ? gap[props.gap] : '0')};
`;

const Section: React.FC<SectionProps> = ({ gap, children }) => {
  return <SectionWrapper gap={gap}>{children}</SectionWrapper>;
};

export default Section;

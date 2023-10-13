import { gap, padding } from '@styles/Constants';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionProps {
  children: ReactNode;
  $gap?: keyof typeof gap;
  dataTest?: string;
}
// I was a little unsure about the $gap prop, but I think it's a good idea to have it
// Using a transient prop we prevent a warning being thrown and it's clear that it's a prop that's only used by styled components 


const SectionWrapper = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${padding.medium};
  box-sizing: border-box;
  gap: ${(props) => (props.$gap ? gap[props.$gap] : '0')}; 
`;

const Section: React.FC<SectionProps> = ({ $gap, children, dataTest }) => {
  return <SectionWrapper data-testid={dataTest} $gap={$gap}>{children}</SectionWrapper>;
};

export default Section;

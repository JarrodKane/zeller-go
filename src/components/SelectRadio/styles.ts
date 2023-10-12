import { color, gap } from '@styles/Constants';
import styled from 'styled-components';

type LabelProps = {
  checked?: boolean;
};

export const SelectWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${gap.small};
  width: 100%;
`;

export const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${gap.small};
  flex-grow: 1;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;

  // only apply hover if not checked
  ${({ checked }) =>
    !checked &&
    ` 
    &:hover {
      background-color: ${color.selectHover};
    }
  `}

  ${({ checked }) =>
    checked &&
    ` 
    background-color:  ${color.selectSelected};
  `}
`;

export const CustomRadio = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

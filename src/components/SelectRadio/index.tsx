import { color, gap } from '@styles/Constants';
import styled from 'styled-components';

type SelectRadioProps = {
  selected?: number;
  list: string[];
  handleSelection: (selection: number) => void;
};

type LabelProps = {
  checked?: boolean;
}

const SelectWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${gap.small};
  width: 100%;
`;

const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${gap.small};
  flex-grow: 1;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;

  // only apply hover if not checked
  ${({ checked }) => !checked && ` 
    &:hover {
      background-color: ${color.selectHover};
    }
  `}

  ${({ checked }) => checked && ` 
    background-color:  ${color.selectSelected};
  `}
`;

const CustomRadio = styled.input`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

export default function SelectRadio(props: SelectRadioProps) {
  const { selected = 0, list, handleSelection } = props;

  const ListEl = list.map((option, index) => (
    <Label key={index} checked={selected === index}>
      <CustomRadio
        type="radio"
        value={option}
        name='roles'
        onChange={() => handleSelection(index)}
        checked={selected === index}
      />
      {option}
    </Label>
  ));

  return (
    <SelectWrapper>
      {ListEl}
    </SelectWrapper>
  );
}

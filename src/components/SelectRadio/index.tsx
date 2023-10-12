import { CustomRadio, Label, SelectWrapper } from './styles';

type SelectRadioProps = {
  selected?: string;
  list: string[];
  handleSelection: (selection: string) => void;
  group: string;
};

export default function SelectRadio(props: SelectRadioProps) {
  const { selected, list, handleSelection, group } = props;
  let selectedRole = false

  const ListEl = list.map((option, index) => {
    selectedRole = selected === option
    return (
      < Label key={index} checked={selectedRole}>
        <CustomRadio
          type="radio"
          value={option}
          name={group}
          onChange={() => handleSelection(option)}
          checked={selectedRole}
        />
        {option}
      </Label >
    )
  }
  )


  return (
    <SelectWrapper>
      {ListEl}
    </SelectWrapper>
  );
}

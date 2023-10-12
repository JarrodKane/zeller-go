import * as S from './styles';

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
      < S.Label key={index} checked={selectedRole}>
        <S.CustomRadio
          type="radio"
          value={option}
          name={group}
          onChange={() => handleSelection(option)}
          checked={selectedRole}
        />
        {option}
      </S.Label >
    )
  }
  )


  return (
    <S.SelectWrapper>
      {ListEl}
    </S.SelectWrapper>
  );
}

import * as S from './styles';

type SelectRadioProps = {
  selected: string;
  list: string[];
  handleSelection: (selection: string) => void;
  group: string;
};

export default function SelectRadio(props: SelectRadioProps) {
  const { list, handleSelection, group } = props;
  let { selected } = props

  if (!selected) {
    selected = list[0]
  }

  if (!list || list.length === 0) {
    return (
      <S.SelectWrapper>
        No list provided
      </S.SelectWrapper>
    )
  }

  const ListEl = list.map((option, index) => {
    const isChecked = selected === option
    return (
      < S.Label key={index} checked={isChecked} data-testid={`radio-${index}`}>
        <S.CustomRadio
          type="radio"
          value={option}
          name={group}
          onChange={() => handleSelection(option)}
          checked={isChecked}
        />
        {option}
      </S.Label >
    )
  }
  )


  return (
    <S.SelectWrapper data-testid={`select-${group}`}>
      {ListEl}
    </S.SelectWrapper>
  );
}

import { color } from '@styles/Constants';
import styled from 'styled-components';

// About as basic as it gets but it does the job

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.divider};
`;

export default Divider;

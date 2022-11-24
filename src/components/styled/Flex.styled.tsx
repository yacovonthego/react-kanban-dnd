import styled from 'styled-components';

export enum JCValues {
  start = 'start',
  center = 'center',
  end = 'end'
}

export enum AIValues {
  flexStart = 'flex-start',
  center = 'center',
  flexEnd = 'flex-end'
}

interface IStyledFlex {
  jc?: JCValues
  ai?: AIValues
}

const StyledFlex = styled.div<IStyledFlex>`
  display: flex;
  justify-content: ${({ jc = 'start' }) => jc};
  align-items: ${({ ai = 'flex-start' }) => ai};
`

export default StyledFlex;
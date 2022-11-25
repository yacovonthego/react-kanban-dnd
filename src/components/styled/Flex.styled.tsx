import styled from 'styled-components';

export enum JCValues {
  start = 'start',
  center = 'center',
  end = 'end',
  spaceBetween = 'space-between'
}

export enum AIValues {
  flexStart = 'flex-start',
  center = 'center',
  flexEnd = 'flex-end'
}

interface IStyledFlexProps {
  jc?: JCValues
  ai?: AIValues
}

const StyledFlex = styled.div<IStyledFlexProps>`
  display: flex;
  justify-content: ${({ jc = 'start' }) => jc};
  align-items: ${({ ai = 'flex-start' }) => ai};
  flex: 1;
`

export default StyledFlex;
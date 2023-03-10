import styled from 'styled-components';
import StyledFlex from './Flex.styled';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100%;
  max-width: 100vw;
  max-height: 100vw;
  overflow: hidden;

  & > ${StyledFlex} {
    flex-direction: column;
  }
`

export default StyledLayout;
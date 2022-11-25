import styled from 'styled-components';
import StyledFlex from './Flex.styled';

const StyledToolBar = styled.nav`
  background: #F5F8FA;
  width: 154px;

  & > ${StyledFlex} {
    padding: 24px 16px 26px;
  }

  h2 {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-right: 16px;
    list-style: none;
  }
`;

export default StyledToolBar;
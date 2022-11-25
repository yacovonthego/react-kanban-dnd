import styled from 'styled-components'
import StyledSearchBar from './SearchBar.styled';

const StyledSideBar = styled.aside`
  width: 219px;
  background: #0F1D40;  

  ${StyledSearchBar} {
    margin: 0 16px 19px 16px;
  }
`

export default StyledSideBar;
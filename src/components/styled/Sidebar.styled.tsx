import styled from 'styled-components'
import StyledSearchBar from './SearchBar.styled';

const StyledSideBar = styled.div`
  width: 219px;
  background: #0F1D40;  

  ${StyledSearchBar} {
    margin-bottom: 19px;
  }
`

export default StyledSideBar;
import * as React from 'react';
import SearchIcon from '../assets/svg/SearchIcon';
import StyledSearchBar, { TSearchBarTheme } from './styled/SearchBar.styled';

interface ISearchBarProps {
  theme?: TSearchBarTheme
}

export const SideBarSearchBarTheme: TSearchBarTheme = {
  bg: '#2D4071',
  brad: '4px',
  iconRight: '4px',
  pad: '9px 10px',
  color: '#fff'
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({ theme }) => {
  return (
    <StyledSearchBar theme={theme}>
      <label>
        <input placeholder="Search..." type="text" />
        <SearchIcon />
      </label>
    </StyledSearchBar>
  );
};

export default SearchBar;

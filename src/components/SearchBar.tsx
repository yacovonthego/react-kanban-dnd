import * as React from 'react';
import SearchIcon from '../assets/svg/SearchIcon';
import StyledSearchBar from './styled/SearchBar.styled';

interface ISearchBarProps {
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({ }) => {
  return (
    <StyledSearchBar>
      <label>
        <input placeholder="Search..." type="text" />
        <SearchIcon />
      </label>
    </StyledSearchBar>
  );
};

export default SearchBar;

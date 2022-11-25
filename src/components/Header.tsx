import * as React from 'react';
import ProfilePic from '../assets/images/ProfilePic.png';
import PlusIcon from '../assets/svg/PlusIcon';
import Button, { AddButtonTheme } from './Button';
import DropDown, { TDropDownItem } from './DropDown';
import Notifications from './Notifications';
import SearchBar from './SearchBar';
import StyledFlex, { AIValues, JCValues } from './styled/Flex.styled';
import StyledHeader, { HeaderLeft, HeaderRight } from './styled/Header.styled';

const DROPDOWNITEMS: TDropDownItem[] = [
  {
    text: 'Board view'
  },
  {
    text: 'Table view'
  },
  {
    text: 'Kanban',
    active: true
  }
]

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = ({ }) => {
  return (
    <StyledHeader>
      <StyledFlex
        ai={AIValues.center}
        jc={JCValues.spaceBetween}
      >
        <HeaderLeft>
          <Button
            text="Add new"
            beforeIcon={<PlusIcon />}
            theme={AddButtonTheme}
          />
          <DropDown items={DROPDOWNITEMS} />
          <DropDown items={[{ text: 'Filters' }]} />
        </HeaderLeft>
        <HeaderRight>
          <SearchBar />
          <Notifications notificationCount="99+" />
          <img src={ProfilePic} alt="profile pic" />
        </HeaderRight>
      </StyledFlex>
    </StyledHeader>
  );
};

export default Header;

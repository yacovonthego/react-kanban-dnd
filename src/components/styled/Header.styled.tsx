import styled from 'styled-components';
import StyledButton from './Button.styled';
import StyledDropDown from './DropDown.styled';
import StyledNotifications from './Notifications.styled';
import StyledSearchBar from './SearchBar.styled';

const StyledHeader = styled.header`
  display: flex;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 2px 4px #F0F1F2;

  ${StyledButton} {

    & + ${StyledButton},
    & + ${StyledDropDown} {
      margin-left: 16px;
    }
  }

  ${StyledDropDown} + ${StyledDropDown} {
    margin-left: 16px;
  }

  ${StyledSearchBar} {
    width: 180px;

    input {
      width: 130px;
    }
  }

  ${StyledNotifications} {
    margin-left: 16px;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;

  img {
    margin-left: 16px;
    width: 40px;
    height: 40px;
  }
`

export default StyledHeader;
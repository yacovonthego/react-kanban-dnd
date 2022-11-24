import styled from 'styled-components';

const StyledSearchBar = styled.div`
  position: relative;
  background: #2D4071;
  margin: 0 16px;
  border-radius: 4px; 
  max-height: 32px;

  svg {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }

  label {
    display: block;
    cursor: text;
    padding: 9px 10px;
    max-height: 32px;
  }

  input {
    background: transparent;
    line-height: 14px;
    color: #fff;
    border: none;
    width: 143px;
    max-height: 14px;

    &::placeholder {
      opacity: 1;
      color: #8C939F;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`

export default StyledSearchBar;
import styled from 'styled-components';

export type TSearchBarTheme = {
  brad?: string
  bg?: string
  iconRight?: string
  pad?: string
  color?: string
}

interface IStyledButtonProps {
  theme: TSearchBarTheme
}

const StyledSearchBar = styled.div<IStyledButtonProps>`
  position: relative;
  background: ${({ theme: { bg = '#F5F8FA' } }) => bg};
  border-radius: ${({ theme: { brad = '50px' } }) => brad}; 

  svg {
    position: absolute;
    top: 50%;
    right: ${({ theme: { iconRight = '12px' } }) => iconRight};
    transform: translateY(-50%);
  }

  label {
    display: block;
    cursor: text;
    padding: ${({ theme: { pad = '12px 16px' } }) => pad};
  }

  input {
    background: transparent;
    line-height: 14px;
    color: ${({ theme: { color = '#222' } }) => color};
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
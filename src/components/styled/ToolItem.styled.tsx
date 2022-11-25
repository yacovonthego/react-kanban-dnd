import styled from 'styled-components';

const StyledToolItem = styled.div`
  position: relative;
  cursor: pointer;
  padding: 11px 10px;

  &:hover {
    color: #0094FF;
  }

  &::before {
    content: '';
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: currentColor;
    border-radius: 0px 10px 10px 0px;
  }

  &[aria-checked="true"] {
    background: #fff;
    color: #0094FF;
    border-radius: 0px 8px 8px 0px;

    &::before {
      display: block;
    }
  }
  
  svg {
    margin-right: 10px;
  }
`;

export default StyledToolItem;
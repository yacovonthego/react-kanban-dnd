import styled from 'styled-components';

export const StyledDropDownContent = styled.ul`
  list-style: none;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: .5s;
  transition-property: opacity, transform;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.99) translateY(-0.7em);
  transform-origin: top;
  position: absolute;
  top: 48px;
  left: 0;
  margin: 0;
  padding: 6px;
  min-width: 132px;
`
export const StyledDropDownItem = styled.li`
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 4px;
  transition: background .1s ease;

  &:hover {
    background: #F5F8FA;
  }
`
const StyledDropDown = styled.div`
  position: relative;

  &[aria-checked="true"] {
    ${StyledDropDownContent} {
      visibility: visible;
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  svg {
    color: #8C939F;
  }
`

export default StyledDropDown;
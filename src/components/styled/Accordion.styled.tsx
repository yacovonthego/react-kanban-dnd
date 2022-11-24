import styled from 'styled-components';

export const StyledAccordionSummary = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  svg {
    margin-right: 8px;
    transform: rotate(-90deg);
  }

  span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const StyledAccordionDetails = styled.div`
  color: #8C939F;
  overflow: hidden;
  max-height: 0px;
  transition: max-height .3s ease-in-out;

  ul {
    list-style: none;
    margin: 0;
    padding: 16px 0 0;
  }

  li {
    cursor: pointer;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li + li {
    margin-top: 16px;
  }
`
export const StyledAccordion = styled.div`
  margin: 4px 16px;

  &[aria-expanded="true"] {
    
    ${StyledAccordionDetails} {
      max-height: 1000px;
    }
    
    ${StyledAccordionSummary} svg {
      transform: rotate(0deg);
    }
  }

  & + & {
    margin-top: 18px;
  }
`


import styled from 'styled-components';

interface ICardDropWrapper {
  isCardOver: boolean
  isCardDragging: boolean
  bg: string
  strike: boolean
}
export const StyledKanbanCard = styled.section`
  cursor: pointer;
  transition: transform .3s ease;
  padding: 15px;
  border-radius: 8px;

  &:hover {
    transform: scale(1.02);
  }
`
export const CardDropWrapper = styled.div<ICardDropWrapper>`
  text-decoration: ${({ strike }) => strike && 'line-through'};  
  transition: padding opacity .1s ease;
  padding-top: ${({ isCardOver }) => isCardOver && '20px'};
  opacity: ${({ isCardDragging }) => isCardDragging && 0};

  ${StyledKanbanCard} {
    color: ${({ strike }) => strike && '#A5A5A5'}; 
    background: ${({ bg }) => bg}; 
  }

  & + & {
    margin-top: 10px;
  }
`
export const StyledKanbanCardTitle = styled.div`
  
`
export const StyledKanbanCardTime = styled.div`
  margin-top: 2px;
  opacity: .9;
`
export const CardColumnTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    padding-top: 25px;
    padding-bottom: 13px;
    border-bottom: 1px solid #F3F3F3;
    height: 59px;

    div {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #8C939F;
    }
`
export const CardColumnTitle = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: block;
      background: #E8EBEF;
      color: #8C939F;
      margin-left: 10px;
      padding: 2px 9px;
      border-radius: 100px;
    }
`
export const CardContainer = styled.section`
  flex: 1;
  padding: 39px 10px 10px 20px;
`
export const StyledKanbanColumn = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;

  & + & {
    ${CardContainer} {      
      border-left: 1px solid #F3F3F3;
    }
  }
  &:last-child {
    flex: 1.24;
    border-left: 1px solid #F3F3F3;

    ${CardColumnTitleWrapper} {
      justify-content: start;
      padding-left: 36px;
    }
  }
`
const StyledKanbanBoard = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%
`
export default StyledKanbanBoard;
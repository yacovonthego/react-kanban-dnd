import styled from 'styled-components';

const StyledNotifications = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 32px;

  span {
    cursor: pointer;
    display: block;
    position: absolute;
    top: -4px;
    right: -8px;
    font-size: 10px;
    line-height: 10px;
    color: #fff;
    background: #F21247;
    border: 1px solid #FFFFFF;
    padding: 5px 3px 5px 4px;
    border-radius: 4px;
  }
  
`

export default StyledNotifications;
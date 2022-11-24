import styled from 'styled-components';

const StyledWorkSpace = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  background: #2D4071;
  padding: 6px 16px;
  margin-bottom: 13px;

  img {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }

  span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default StyledWorkSpace;
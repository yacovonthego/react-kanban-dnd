import * as React from 'react';
import List from './List';
import StyledFlex from './styled/Flex.styled';
import StyledToolBar from './styled/ToolBar.styled';

interface IToolBarProps {
}

const ToolBar: React.FunctionComponent<IToolBarProps> = (props) => {
  return (
    <StyledToolBar>
      <StyledFlex>
        <h2>Tools</h2>
      </StyledFlex>
      <ul>
        <List items={[]} renderItem={() => (<li></li>)} />
      </ul>
    </StyledToolBar>
  );
};

export default ToolBar;

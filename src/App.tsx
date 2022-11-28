import * as React from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import SideBar from './components/SideBar';
import StyledFlex from './components/styled/Flex.styled';
import StyledLayout from './components/styled/Layout.styled';
import ToolBar from './components/ToolBar';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = ({ }) => {
  return (
    <StyledLayout>
      <SideBar />
      <ToolBar />
      <StyledFlex>
        <Header />
        <KanbanBoard />
      </StyledFlex>
    </StyledLayout>
  );
};

export default App;
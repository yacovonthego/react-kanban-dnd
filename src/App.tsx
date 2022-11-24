import * as React from 'react';
import SideBar from './components/SideBar';
import StyledLayout from './components/styled/Layout.styled';
import ToolBar from './components/ToolBar';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = ({  }) => {
  return (
    <StyledLayout>
      <SideBar />
      <ToolBar />
    </StyledLayout>
  );
};

export default App;
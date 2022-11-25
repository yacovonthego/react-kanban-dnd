import * as React from 'react';
import FilesIcon from '../assets/svg/FilesIcon';
import NotesIcon from '../assets/svg/NotesIcon';
import RoadMapIcon from '../assets/svg/RoadMapIcon';
import ScheduleIcon from '../assets/svg/ScheduleIcon';
import TasksIcon from '../assets/svg/TasksIcon';
import List from './List';
import StyledFlex from './styled/Flex.styled';
import StyledToolBar from './styled/ToolBar.styled';
import ToolItem, { IToolItem } from './ToolItem';

interface IToolBarProps {
}

const TOOLBARITEMS = [
  {
    text: 'Roadmap',
    icon: <RoadMapIcon />
  },
  {
    text: 'Schedule',
    icon: <ScheduleIcon />,
    active: true
  },
  {
    text: 'Tasks',
    icon: <TasksIcon />
  },
  {
    text: 'Notes',
    icon: <NotesIcon />
  },
  {
    text: 'Files',
    icon: <FilesIcon />
  }
]

const ToolBar: React.FunctionComponent<IToolBarProps> = (props) => {
  return (
    <StyledToolBar>
      <StyledFlex>
        <h2>Tools</h2>
      </StyledFlex>
      <ul>
        <List
          <IToolItem>
          items={TOOLBARITEMS}
          renderItem={(item) => (
            <li key={item.text}>
              <ToolItem text={item.text} icon={item.icon} active={item.active} ></ToolItem>
            </li>
          )}
        />
      </ul>
    </StyledToolBar>
  );
};

export default ToolBar;

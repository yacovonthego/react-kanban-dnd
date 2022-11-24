import * as React from 'react';
import StyledWorkSpace from './styled/WorkSpace.styled';
import ProfilePic from '../assets/images/ProfilePic.png';

interface IWorkSpaceProps {
}

const WorkSpace: React.FunctionComponent<IWorkSpaceProps> = ({  }) => {
  return (
    <StyledWorkSpace>
      <img src={ProfilePic} alt="profile pic" />
      <span>My workspace</span>
    </StyledWorkSpace>
  );
};

export default WorkSpace;

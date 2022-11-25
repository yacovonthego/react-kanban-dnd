import * as React from 'react';
import BellIcon from '../assets/svg/BellIcon';
import StyledNotifications from './styled/Notifications.styled';

interface INotificationsProps {
  notificationCount?: string
}

const Notifications: React.FunctionComponent<INotificationsProps> = ({ notificationCount }) => {
  return (
    <StyledNotifications>
      { notificationCount && <span>{notificationCount}</span> }
      <BellIcon />
    </StyledNotifications>
  );
};

export default Notifications;

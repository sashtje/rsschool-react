import './styles.scss';

const NotificationWindow = ({ message }: { message: string }) => {
  return <div className="notification">{message}</div>;
};

export default NotificationWindow;

import classes from './notification.module.css';

function Notification(props) {
  const { title, type } = props;

  let statusClasses;

  if (type === 'error') {
    statusClasses = classes.error;
  } else {
    statusClasses = classes.notify;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
    </div>
  );
}

export default Notification;

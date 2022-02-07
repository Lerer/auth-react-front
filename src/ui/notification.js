import classes from './notification.module.css';

function Notification(props) {
  const { title } = props;

  let statusClasses = '';

  statusClasses = classes.error;

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
    </div>
  );
}

export default Notification;

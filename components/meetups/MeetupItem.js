import { useRouter } from 'next/navigation';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  // useRouter can only be used in the root
  const router = useRouter();
  // instead of using LINK, which is better you can navigate more programmatically:
  function showDetailsHandler() {
    router.push('/' + props.id);
  }
  // here the page will be pushed on top!!!

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Me</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

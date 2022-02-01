import styles from './eventItem.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/dateIcon';
import AddressIcon from '../icons/addressIcon';
import ArrowRightIcon from '../icons/arrowRightIcon';

function EventItem({ title, image, date, location, id }) {
  const dateFormatted = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedLocation = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{dateFormatted}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

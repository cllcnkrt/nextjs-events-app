import React from 'react';
import Link from 'next/link';
import styles from './eventItem.module.css';

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
            <time>{dateFormatted}</time>
          </div>
          <div>
            <address className={styles.address}>{formattedLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore events</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './eventItem.module.scss';

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
      <img
        className={styles.image}
        src={`/${image}`}
        alt={title}
        height={150}
        width={200}
      />
      <div>
        <div>
          <h2 className={styles.h2}>{title}</h2>
          <div>
            <time>{dateFormatted}</time>
          </div>
          <div>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore events</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

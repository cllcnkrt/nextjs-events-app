import React from 'react';
import EventItem from './eventItem';
import styles from './eventList.module.css';

function EventList(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
}

export default EventList;

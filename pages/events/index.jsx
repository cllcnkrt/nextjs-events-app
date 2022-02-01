import React from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events-list/eventList';
import EventsSearch from '../../components/events-search/eventsSearch';

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
}

export default EventsPage;

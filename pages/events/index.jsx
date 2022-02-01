import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events-list/eventList';
import EventsSearch from '../../components/events-search/eventsSearch';

function EventsPage() {
  const events = getAllEvents();
  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
}

export default EventsPage;

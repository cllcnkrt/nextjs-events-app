import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events-list/eventList';

function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;

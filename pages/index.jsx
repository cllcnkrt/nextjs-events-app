import React from 'react';
import EventList from '../components/events-list/eventList';
import { getFeaturedEvents } from '../dummy-data';

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Home;

import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events-list/eventList';

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2022 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found for chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;

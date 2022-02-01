import Link from 'next/link';
import React from 'react';

function MainHeader() {
  return (
    <header>
      <div>
        <Link href="/">Events</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

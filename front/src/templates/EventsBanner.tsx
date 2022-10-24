import { useMemo } from 'react';

import className from 'classnames';
import Link from 'next/link';

const MOCK_DATA = [
  {
    id: 1,
    host: 'Ekken O.',
    date: '10/26/2022',
    eventName: 'Group Study ( Data Structures & Algorithms | Others )',
    url: 'https://www.meetup.com/en-AU/tokyopythonsocietyclub/events/qwmxvsydcnbjc/',
  },
  {
    id: 2,
    host: 'Ekken O.',
    date: '11/02/2022',
    eventName: 'Group Study ( Data Structures & Algorithms | Others )',
    url: 'https://www.meetup.com/en-AU/tokyopythonsocietyclub/events/qwmxvsydcpbdb/',
  },
  {
    id: 3,
    host: 'Ekken O.',
    date: '11/09/2022',
    eventName: 'Group Study ( Data Structures & Algorithms | Others )',
    url: 'https://www.meetup.com/en-AU/tokyopythonsocietyclub/events/qwmxvsydcpbmb/',
  },
  {
    id: 4,
    host: 'Ekken O.',
    date: '11/16/2022',
    eventName: 'Group Study ( Data Structures & Algorithms | Others )',
    url: 'https://www.meetup.com/en-AU/tokyopythonsocietyclub/events/qwmxvsydcpbmb/',
  },
  {
    id: 5,
    host: 'Ekken O.',
    date: '11/23/2022',
    eventName: 'Group Study ( Data Structures & Algorithms | Others )',
    url: 'https://www.meetup.com/en-AU/tokyopythonsocietyclub/events/qwmxvsydcpbvb/',
  },
];

const EventsBanner = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const eventsBannerClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center'
  );

  return (
    <div className={eventsBannerClass}>
      <div className="w-full text-center sm:px-6">
        <h3 className="text-3xl border-b-4 text-gray-900 font-semibold">
          Upcoming Events
        </h3>
        <div className="mt-6 text-xl leading-9">
          <table className="w-full">
            <tr className="border-b-2">
              <th>Date</th>
              <th>Host</th>
              <th>Event Name</th>
              <th>URL</th>
            </tr>
            {data.map((val, key) => {
              let date = new Date(val.date).toString();
              date = date.substring(0, date.indexOf('00:00:00'));
              return (
                <tr className="border-b-2" key={key}>
                  <td>{date}</td>
                  <td>{val.host}</td>
                  <td>{val.eventName}</td>
                  <td>
                    <a className="text-blue-900">
                      <Link href={val.url}>Here</Link>
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export { EventsBanner };

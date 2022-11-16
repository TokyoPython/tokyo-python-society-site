import { useEffect, useState } from 'react';

import className from 'classnames';
import Link from 'next/link';

import { getMeetupEvents } from '../utils/fetchMeetupEvents';
import IEventResponse from '../utils/meetupevents';

const EventsBanner = () => {
  const [data, setData] = useState<IEventResponse[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMeetupEvents();
        const eventsList: IEventResponse[] = response!.data.groupeventlist;
        setData(eventsList);
      } catch (error) {
        console.log(error);
        // Axios / network error
        setVisible(false);
        setData([
          {
            node: {
              id: '1',
              title: 'NA',
              dateTime: 'NA',
              eventUrl: 'NA',
            },
          },
        ]);
      }
    };
    fetchData().catch(console.error);
  }, []);

  const eventsBannerClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center'
  );
  const Chart = () => {
    return (
      // return data if successful response
      <>
        {data.map((event: IEventResponse, key: number) => {
          // cleanse date
          const date = new Date(event.node.dateTime).toDateString();
          // return JSX
          return (
            <tr className="border-b-2 even:bg-slate-100" key={key}>
              <td>
                <div className={!visible ? 'invisible' : ''}>{date}</div>
              </td>
              <td>{event.node.title}</td>
              <td>
                <div className={visible ? 'text-blue-900' : 'invisible'}>
                  <Link href={event.node.eventUrl}>url here</Link>
                </div>
              </td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <div className={eventsBannerClass}>
      <div className="w-full text-center sm:px-6">
        <h3 className="text-3xl border-b-4 text-gray-900 font-semibold">
          Upcoming Events
        </h3>
        <div className="mt-6 text-xl leading-9">
          <table className="w-full">
            <tbody>
              <tr className="border-b-2">
                <th>Date</th>
                <th>Event Name</th>
                <th>URL</th>
              </tr>
              <Chart />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export { EventsBanner };

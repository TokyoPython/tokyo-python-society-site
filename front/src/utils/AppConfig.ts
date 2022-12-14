// API refers to the backend endpoint
const API = 'http://localhost:8000';

export const AppConfig = {
  site_name: 'Tokyo Python Society',
  title: 'Tokyo Python Society',
  description: 'From feature/test a Nextjs Boilerplate with Tailwind CSS',
  locale: 'en',
  site_links: {
    external: {
      discord: 'https://discord.com/invite/kqhzghtcds',
      github: 'https://github.com/TokyoPython',
      facebook: 'https://www.facebook.com/groups/TokyoPythonSocietyClub',
      slack: 'https://tokyo-python-sc.slack.com',
      meetup: 'https://www.meetup.com/ja-JP/tokyopythonsocietyclub',
    },
    internal: {
      blog: '/blog',
      about: '/about',
      contact: '/contact',
    },
  },
  API: {
    MEETUP_URL: API,
  },
};

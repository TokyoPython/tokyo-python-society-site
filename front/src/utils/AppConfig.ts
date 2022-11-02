export const AppConfig = {
  site_name: 'Tokyo Python Society',
  title: 'Tokyo Python Society',
  description: 'Made with Nextjs Boilerplate with Tailwind CSS',
  locale: 'en',
  site_links: {
    external: {
      discord: "https://discord.gg/7mXFufd8",
      github: 'https://github.com/TokyoPython',
      facebook: 'https://www.facebook.com/groups/TokyoPythonSocietyClub',
      slack: 'https://tokyo-python-sc.slack.com',
      meetup: "https://www.meetup.com/ja-JP/tokyopythonsocietyclub",
    },
    internal: {
      blog: '/blog',
      about: '/about',
      contact: '/contact',
    }
  },
  API: {
    MEETUP_URL: process.env.NEXT_PUBLIC_MEETUP_URL
  }
};
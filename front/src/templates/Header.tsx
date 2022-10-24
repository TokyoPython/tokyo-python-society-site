import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Header = () => (
  <Background color="bg-gray-300">
    <Section yPadding="py-8">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href={AppConfig.site_links.github}>
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href={AppConfig.site_links.blog}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href={AppConfig.site_links.about}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={AppConfig.site_links.contact}>
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Header };

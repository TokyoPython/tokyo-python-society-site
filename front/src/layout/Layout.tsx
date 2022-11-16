import { ReactNode } from 'react';

import { useRouter } from 'next/router';

import { Base } from '../templates/Base';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { Hero } from '../templates/Hero';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from './Meta';
import { Section } from './Section';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  console.log(children);
  return (
    <>
      <Meta
        title={
          router.pathname === '/'
            ? AppConfig.title
            : `Tokyo Python: ${router.pathname}`
        }
        description={AppConfig.description}
      />
      <Header />
      {router.pathname === '/' ? (
        <>
          <Hero />
          <Base />
        </>
      ) : (
        <Section>{children}</Section>
      )}
      <Footer />
    </>
  );
}

import { ReactNode } from 'react';

import { useRouter } from 'next/router';

import { Base } from '../templates/Base';
import { Footer } from '../templates/Footer';
import { Header } from '../templates/Header';
import { Hero } from '../templates/Hero';
import { Section } from './Section';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return (
      <>
        <Header />
        <Hero />
        <Base />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Section>{children}</Section>
      <Footer />
    </>
  );
}

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-300">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'Welcome to the Tokyo Python Society \n'}</>}
        description="Come hang out at our Discord"
        button={
          <Link href="https://discord.gg/7mXFufd8">
            <a>
              <Button xl>Join Our Discord</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };

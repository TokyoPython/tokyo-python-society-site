import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const Hero = () => (
  <Background color="bg-gray-300">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={<>{'Welcome to the Tokyo Python Society \n'}</>}
        description="Come hang out at our Discord"
        button={
          <Button
            url={AppConfig.site_links.external.discord}
          >
            Join Our Discord
          </Button>
        }
      />
    </Section>
  </Background>
);

export { Hero };

import Image from 'next/image';
import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

type IFormProps = {
  children: React.ReactNode;
};

const ContactForm = (props: IFormProps) => {
  const iconHeight = 50;
  const iconWidth = 50;
  return (
    <div className="text-center	">
      <h1 className="text-xl">{props.children}</h1>
      <div className="py-5 space-x-3">
        <span className="hover:cursor-pointer">
          <Link href={AppConfig.site_links.external.discord} passHref>
            <Image
              src="../assets/images/discord-icon.svg"
              height={iconHeight}
              width={iconWidth}
              alt="Discord"
            />
          </Link>
        </span>
        <span className="hover:cursor-pointer">
          <Link href={AppConfig.site_links.external.meetup} passHref>
            <Image
              src="../assets/images/meetup-icon.svg"
              height={iconHeight}
              width={iconWidth}
              alt="Meetup"
            />
          </Link>
        </span>
        <span className="hover:cursor-pointer">
          <Link href={AppConfig.site_links.external.facebook} passHref>
            <Image
              src="../assets/images/facebook-icon.svg"
              height={iconHeight}
              width={iconWidth}
              alt="Facebook"
            />
          </Link>
        </span>
        <span className="hover:cursor-pointer">
          <Link href={AppConfig.site_links.external.slack} passHref>
            <Image
              src="../assets/images/slack-icon.svg"
              height={iconHeight}
              width={iconWidth}
              alt="Slack"
            />
          </Link>
        </span>
      </div>
    </div>
  );
};

function Contact() {
  return (
    <>
      <Meta title={AppConfig.title} description="Contact Us Page" />
      <ContactForm>Reach Us Here</ContactForm>
    </>
  );
}

export default Contact;

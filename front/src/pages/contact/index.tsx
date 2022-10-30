import { Meta } from "../../layout/Meta";
import { AppConfig } from "../../utils/AppConfig";
import Image from 'next/image'
import Link from "next/link";

type IFormProps = {
    children: React.ReactNode;
  };

const ContactForm = (props: IFormProps) => {
    const iconHeight = 50
    const iconWidth = 50
    return (
        <div className="text-center	">
            <h1 className="text-xl">{props.children}</h1>
            <div className="py-5 space-x-3">
                <span className="hover:cursor-pointer">
                        <Link href={AppConfig.site_links.external.discord}>
                            <Image src="/assets/images/discord-icon.svg" height={iconHeight} width={iconWidth} />
                        </Link>
                </span>
                <span className="hover:cursor-pointer">
                        <Link href={AppConfig.site_links.external.meetup}>
                            <Image src="/assets/images/meetup-icon.svg" height={iconHeight} width={iconWidth} />
                        </Link>
                </span>
                <span className="hover:cursor-pointer">
                    <Link href={AppConfig.site_links.external.facebook}>
                        <Image src="/assets/images/facebook-icon.svg" height={iconHeight} width={iconWidth} />
                    </Link>
                </span>
                <span className="hover:cursor-pointer">
                    <Link href={AppConfig.site_links.external.slack}>
                        <Image src="/assets/images/slack-icon.svg" height={iconHeight} width={iconWidth} />
                    </Link>
                </span>
            </div>
        </div>
    )
}

function Contact() {

  return (
    <>
        <Meta title={AppConfig.title} description="Contact Us Page" />
        <ContactForm>Reach Us Here</ContactForm>
    </>
  );
}

export default Contact;

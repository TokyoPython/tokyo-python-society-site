import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { EventsBanner } from './EventsBanner';

const MEETUP_DAY = 'Wednesday';

const VerticalFeatures = () => (
  <Section
    title="Who we are"
    description="We're enthusiastic learners (not necessarily experts) of Python. We're open to anyone of any level interested in improving their knowledge or teaching others."
  >
    <VerticalFeatureRow
      title="Our Goal"
      description="We hope to build a tech community with a focus on learning and building together with Python."
      image="/assets/images/coding.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="How to get involved"
      description={`We are most active on Discord. We also meet up every ${MEETUP_DAY}`}
      image="/assets/images/community.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <EventsBanner></EventsBanner>
  </Section>
);

export { VerticalFeatures };

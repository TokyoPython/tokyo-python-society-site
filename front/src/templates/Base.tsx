import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { VerticalFeatures } from './VerticalFeatures';

// The base information for the landing page

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <VerticalFeatures />
  </div>
);

export { Base };

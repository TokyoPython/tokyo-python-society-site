import { AppProps } from 'next/app';

import '../styles/global.css';

// grabbing necessary layouts from templates
import Layout from '../layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;

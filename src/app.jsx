import Router from 'react-router';
import { Layout } from '@components/layout';
import { HomePage } from '@pages/home';
import { BlogPage } from '@pages/blog';
import { AboutPage } from '@pages/about';
import { PricingPage } from '@pages/pricing';
import { ContactPage } from '@pages/contact';
import { MarketPlacePage } from '@pages/market-place';
import { configuration } from './configuration';

const paths = configuration.paths;

export const App = () => {
  return (
    <Layout>
      <Router>
        <HomePage default path={paths.home} />
        <AboutPage path={paths.about} />
        <BlogPage path={paths.blog} />
        <PricingPage path={paths.pricing} />
        <ContactPage path={paths.contact} />
        <MarketPlacePage path={paths.marketplace} />
      </Router>
    </Layout>
  );
};

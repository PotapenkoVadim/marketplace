import Router from 'react-router';
import { Layout } from '@components/layout';
import { HomePage } from '@pages/home';
import { BlogPage } from '@pages/blog';
import { AboutPage } from '@pages/about';
import { PricingPage } from '@pages/pricing';
import { ContactPage } from '@pages/contact';
import { MarketPlacePage } from '@pages/market-place';

export const App = () => {
  return (
    <Layout>
      <Router>
        <HomePage path='/' />
        <AboutPage path='/about' />
        <BlogPage path='/blog' />
        <PricingPage path='/pricing' />
        <ContactPage path='/contact' />
        <MarketPlacePage path='/market-place' />
      </Router>
    </Layout>
  );
};
import Router from 'react-router';
import { Layout } from '@components/layout';
import { HomePage } from '@pages/home';
import { BlogPage } from '@pages/blog';
import { AboutPage } from '@pages/about';
import { PricingPage } from '@pages/pricing';
import { ContactPage } from '@pages/contact';

export const App = () => {
  return (
    <Layout>
      <Router>
        <HomePage path='/' />
        <AboutPage path='/about' />
        <BlogPage path='/blog' />
        <PricingPage path='/pricing' />
        <ContactPage path='/contact' />
      </Router>
    </Layout>
  );
};
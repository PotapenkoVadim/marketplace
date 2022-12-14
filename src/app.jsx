import Router from 'react-router';
import { Layout } from '@components/layout';
import { HomePage } from '@pages/home';
import { BlogPage } from '@pages/blog';
import { AboutPage } from '@pages/about';

export const App = () => {
  return (
    <Layout>
      <Router>
        <HomePage path="/" />

        <AboutPage path="/about" />
        
        <BlogPage path="/blog" />
      </Router>
    </Layout>
  );
};
import customerAvatarImage from './static/avatar.png';
import defaultAvatarImage from './static/default-avatar.jpg';
import adminAvatarImage from './static/admin-avatar.jpg';

const homePage = DEVELOPMENT ? '/' : '/marketplace/';
const paths = {
  home: homePage,
  marketplace: `${homePage}market-place`,
  blog: `${homePage}blog`,
  pricing: `${homePage}pricing`,
  about: `${homePage}about`,
  contact: `${homePage}contact`,
};

export const configuration = {
  paths,
  routes: [
    {
      name: 'Market Place',
      path: paths.marketplace,
    },
    {
      name: 'Blog',
      path: paths.blog,
    },
    {
      name: 'Pricing',
      path: paths.pricing,
    },
    {
      name: 'About',
      path: paths.about,
    },
    {
      name: 'Contact',
      path: paths.contact,
    },
  ],
  additionalRoutes: [
    {
      name: 'Our Mobile App',
      path: '#',
    },
    {
      name: 'Frequently Asked Questions',
      path: '#',
    },
    {
      name: 'Help Desk',
      path: '#',
    },
    {
      name: 'Privacy Policy',
      path: '#',
    },
    {
      name: 'Terms and Conditions',
      path: '#',
    },
  ],
  header: {
    hidingClass: 'header_hide',
  },
  user: {
    types: {
      admin: {
        key: 'admin',
        avatar: adminAvatarImage,
      },
      customer: {
        key: 'customer',
        avatar: customerAvatarImage,
      },
      guest: {
        key: 'guest',
        avatar: defaultAvatarImage,
      },
    },
  },
};

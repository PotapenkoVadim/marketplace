import customerAvatarImage from './static/avatar.png';
import defaultAvatarImage from './static/default-avatar.jpg';
import adminAvatarImage from './static/admin-avatar.jpg';
import homePagePoster from './static/introduce.png';
import productDefaultImage from './static/test-product.png';

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
  homePage: {
    poster: homePagePoster,
    sectionIDs: {
      topDeals: 'topDeals',
      bestSelling: 'bestSelling',
    },
  },
  user: {
    types: {
      admin: {
        role: 'admin',
        avatar: adminAvatarImage,
      },
      customer: {
        role: 'customer',
        avatar: customerAvatarImage,
      },
      guest: {
        role: 'guest',
        avatar: defaultAvatarImage,
      },
    },
  },
  modal: {
    types: {
      productModal: 'productModal',
      dialogModal: 'dialogModal',
    },
  },
  product: {
    defaultImage: productDefaultImage,
    default: {
      name: '',
      price: '',
    },
  },
  defaultProductList: [
    {
      id: 1,
      name: 'Nokia Essential Wireless Headphones 120CM BLACK',
      price: 600000,
    },
    {
      id: 2,
      name: 'Nokia Essential Wireless Headphones 120CM BLACK',
      price: 600000,
    },
    {
      id: 3,
      name: 'Nokia Essential Wireless Headphones 120CM BLACK',
      price: 600000,
    },
  ],
};

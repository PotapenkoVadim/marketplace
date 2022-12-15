import { HomePageIntroduce } from '@components/pages/home/introduce';
import { HomePageProductList } from '@components/pages/home/product-list';
import { HomePageSubscribe } from '@components/pages/home/subscribe';

export const HomePage = () => {
  return (
    <>
      <HomePageIntroduce />
      <HomePageProductList title='Our Top Deals' />
      <HomePageProductList title='Best Selling Product' />
      <HomePageSubscribe />
    </>
  );
};
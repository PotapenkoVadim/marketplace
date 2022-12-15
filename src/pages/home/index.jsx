import { HomePageIntroduce } from '@components/pages/home/introduce';
import { HomePageProductList } from '@components/pages/home/product-list';

export const HomePage = () => {
  return (
    <>
      <HomePageIntroduce />
      <HomePageProductList title='Our Top Deals' />
      <HomePageProductList title='Best Selling Product' />
    </>
  );
};
import { HomePageIntroduce } from '@components/pages/home/introduce';
import { HomePageProductList } from '@components/pages/home/product-list';
import { HomePageSubscribe } from '@components/pages/home/subscribe';
import { ProductModal } from '@components/common/product-modal';
import { configuration } from '@/configuration';
import { DialogModal } from '@components/common/dialog-modal';
import { NotificationModal } from '@components/common/notification-modal';

const { topDeals: topDealsSectionID, bestSelling: bestSellingSectionID } =
  configuration.homePage.sectionIDs;

export const HomePage = () => {
  return (
    <>
      <HomePageIntroduce />
      <HomePageProductList id={topDealsSectionID} title="Our Top Deals" />
      <HomePageProductList
        id={bestSellingSectionID}
        title="Best Selling Product"
      />
      <HomePageSubscribe />

      <ProductModal />
      <DialogModal />
      <NotificationModal />
    </>
  );
};

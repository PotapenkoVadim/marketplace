import { MarketPlacePageProductList } from '@components/pages/market-place/product-list';
import { ProductModal } from '@components/common/product-modal';

export const MarketPlacePage = () => {
  return (
    <>
      <MarketPlacePageProductList />

      <ProductModal />
    </>
  );
};

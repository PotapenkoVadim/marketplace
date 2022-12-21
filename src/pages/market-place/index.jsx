import { MarketPlacePageProductList } from '@components/pages/market-place/product-list';
import { ProductModal } from '@components/common/product-modal';
import { DialogModal } from '@components/common/dialog-modal';

export const MarketPlacePage = () => {
  return (
    <>
      <MarketPlacePageProductList />

      <ProductModal />
      <DialogModal />
    </>
  );
};

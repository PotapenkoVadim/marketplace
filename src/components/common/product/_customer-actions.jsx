import styles from './product.module.scss';
import { ButtonLink } from '@uikit/button/_link';
import { Button } from '@uikit/button';
import { useIsCustomer } from '@hooks';

export const ProductCustomerActions = ({ user, onAddToCart }) => {
  const isCustomer = useIsCustomer(user);

  return (
    <>
      {isCustomer && (
        <div className={styles['product__actions']}>
          <ButtonLink onClick={onAddToCart}>Add to Cart</ButtonLink>
          <Button size="large" variant="primary">
            Buy Now
          </Button>
        </div>
      )}
    </>
  );
};
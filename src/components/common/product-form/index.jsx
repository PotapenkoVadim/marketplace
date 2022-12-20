import styles from './product-form.module.scss';
import { useState } from 'react';
import { FormField } from '@uikit/form';
import { Button } from '@uikit/button';

export const ProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: '',
    price: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(product);
  };

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setProduct({
      ...product,
      [key]: value,
    });
  };

  return (
    <form className={styles['product-form']}>
      <FormField
        label="Name"
        name="name"
        value={product.name}
        onChange={handleChange}
      />

      <FormField
        label="Price"
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
      />

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
};

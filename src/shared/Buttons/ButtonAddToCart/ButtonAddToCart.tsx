import React from 'react';
import styles from './ButtonAddToCart.module.scss';
import cn from 'classnames';
import { useActions } from '../../../hooks/useActions';
import { IProductCard } from '../../../interfaces/ProductCard.interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const ButtonAddToCart: React.FC<{ product: IProductCard }> = ({ product }) => {
  const { addToCart, deleteWithCart } = useActions();
  const items = useSelector((state: RootState) => state.cart.items);
  const existingItem = items.find(item => item.id === product.id);

  const handleAddToCart = () => {
    if (existingItem) {
      deleteWithCart(existingItem);
    } else {
      addToCart({
        id: product.id,
        product,
        quantity: 1,
        price: product.price,
      });
    }
  };

  return (
    <button
      className={cn(styles.btn, { [styles.selected]: existingItem })}
      onClick={handleAddToCart}
      aria-pressed={!!existingItem}
      aria-label={
        existingItem
          ? `Remove ${product.name} from cart`
          : `Add ${product.name} to cart`
      }
    >
      {existingItem ? 'Added' : 'Add to cart'}
    </button>
  );
};

export default ButtonAddToCart;

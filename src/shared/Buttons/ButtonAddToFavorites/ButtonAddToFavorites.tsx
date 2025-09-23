import React from 'react';
import styles from './ButtonAddToFavorites.module.scss';
import cn from 'classnames';
import { IProductCard } from '../../../interfaces/ProductCard.interface';
import { useActions } from '../../../hooks/useActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const ButtonAddToFavorites: React.FC<{
  product: IProductCard,
}> = ({ product }) => {
  const { addToFavourites, removeFromFavourites } = useActions();
  const items = useSelector((state: RootState) => state.favourites.items);
  const existingItem = items.find(item => item.id === product.id);

  const handleAddToFavorites = () => {
    if (existingItem) {
      removeFromFavourites(existingItem);
    } else {
      addToFavourites(product);
    }
  };

  return (
    <button
      className={cn(styles.btn, { [styles.selected]: existingItem })}
      onClick={handleAddToFavorites}
      aria-pressed={!!existingItem}
      aria-label={
        existingItem
          ? `Remove ${product.name} from favourites`
          : `Add ${product.name} to favourites`
      }
    >
      <img
        className={styles.btn__img}
        src={
          existingItem
            ? "images/icons/FavouritesAdded.png"
            : 'images/icons/FavouritesDark.png'
        }
        alt=""
        aria-hidden="true"
      />
    </button>
  );
};

export default ButtonAddToFavorites;

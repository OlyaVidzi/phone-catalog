import React from "react";
import { IProductCard } from "../../interfaces/ProductCard.interface";
import styles from './CardItem.module.scss';
import ButtonAddToCart from "../Buttons/ButtonAddToCart";
import ButtonAddToFavorites from "../Buttons/ButtonAddToFavorites";
import { Link } from "react-router-dom";

interface CardItemProps {
  product: IProductCard,
}

const CardItem: React.FC<CardItemProps> = ({ product }) => {
  const LinkTo = `/${product.category}/${product.itemId}`;

  return (
    <article
      className={styles.container}
      aria-label={`Product: ${product.name}, Price: $${product.price}`}
    >
      <Link to={LinkTo}>
        <div className={styles.imgDiv}>
          <img src={product.image} alt={product.name} />
        </div>
      </Link>

      <Link to={LinkTo}>
        <div className={styles.name}>
          <h3>{product.name.toUpperCase()}</h3>
        </div>
      </Link>

      <div className={styles.price}>
        <p>{`$${product.price}`}</p>
        <p className={styles.price__fullPrice}>{`$${product.fullPrice}`}</p>
      </div>

      <div className={styles.line}></div>

      <dl className={styles.description}>
        <div>
          <dt>Screen</dt>
          <dd>{product.screen}</dd>
        </div>
        <div>
          <dt>Capacity</dt>
          <dd>{product.capacity}</dd>
        </div>
        <div>
          <dt>RAM</dt>
          <dd>{product.ram}</dd>
        </div>
      </dl>

      <div className={styles.buttons}>
        <ButtonAddToCart product={product} />
        <ButtonAddToFavorites product={product} />
      </div>
    </article>
  );
};

export default CardItem;

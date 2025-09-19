import React from "react";
import { ICart } from "../../../../interfaces/Cart.interface";
import styles from './CartItem.module.scss';
import { Link } from "react-router-dom";
import { useActions } from "../../../../store/useActions";
import { CiSquareRemove } from "react-icons/ci";

const CartItem: React.FC<{ item: ICart }> = ({ item }) => {
  const { deleteWithCart, changeQuantity } = useActions();
  const LinkTo = `/${item.product.category}/${item.product.itemId}`;

  return (
    <article
      className={styles.container}
      aria-label={`Cart item: ${item.product.name}`}
    >
      <div className={styles.left}>
        <button
          onClick={() => deleteWithCart(item)}
          aria-label={`Remove ${item.product.name} from cart`}
        >
          <CiSquareRemove size={24}/>
        </button>

        <div className={styles.left__img}>
          <Link to={LinkTo}>
            <img src={item.product.image} alt={item.product.name} />
          </Link>
        </div>

        <Link to={LinkTo}>
          <h3>{item.product.name}</h3>
        </Link>
      </div>

      <div className={styles.right}>
        <div className={styles.right__buttons}>
          <button
            onClick={() => changeQuantity({ id: item.id, type: 'minus'})}
            className={styles.right__btn}
            disabled={item.quantity === 1}
            aria-label={`Decrease quantity of ${item.product.name}`}
          >
            -
          </button>

          <span aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span>

          <button
            onClick={() => changeQuantity({ id: item.id, type: 'plus'})}
            className={styles.right__btn}
            aria-label={`Increase quantity of ${item.product.name}`}
          >
            +
          </button>
        </div>

        <div className={styles.right__price} aria-label={`Price: $${item.product.price}`}>
          {`$${item.product.price}`}
        </div>
      </div>
    </article>
  );
};

export default CartItem;

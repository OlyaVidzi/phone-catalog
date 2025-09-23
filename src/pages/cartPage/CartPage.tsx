import { useEffect, useState } from "react";
import Breadcrumbs from "../../shared/Breadcrumbs";
import styles from './CartPage.module.scss';
import CartItem from "./components/CartItem";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../shared/Loader";
import EmptyContent from "../../shared/EmptyContent";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const countItemsInCart =
    items.reduce((total, item) => total + item.quantity, 0);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumbs categoryName={pathname.slice(1)} />

      <h1>Cart</h1>

      {isLoading ? (
        <Loader />
      ) : items.length > 0 ? (
        <div className={styles.main}>
          <section className={styles.main__items} aria-label="Cart items">
            {items.map(item => (
              <CartItem item={item} key={item.id} />
            ))}
          </section>

          <aside className={styles.main__price} aria-label="Order summary">
            <h2>{`$${totalPrice}`}</h2>
            <p>{`Total for ${countItemsInCart} items`}</p>
            <div className={styles.line}></div>
            <Link
              to='pay'
              aria-label="Proceed to checkout"
              className={styles.main__btn}
            >
              Checkout
            </Link>
          </aside>
        </div>
      ) : (
        <EmptyContent title="Your cart is empty" img="img/is-empty.png"/>
      )}
    </div>
  );
};

export default CartPage;

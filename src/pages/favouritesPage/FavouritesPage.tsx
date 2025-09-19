import { useLocation } from "react-router-dom";
import CardItem from "../../shared/CardItem";
import styles from './FavouritesPage.module.scss';
import Breadcrumbs from "../../shared/Breadcrumbs";
import EmptyContent from "../../shared/EmptyContent";
import { useEffect, useState } from "react";
import Loader from "../../shared/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FavouritesPage = () => {
  const items = useTypedSelector(state => state.favourites.items);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={styles.container}
      role="region"
      aria-label="Favourites page"
    >
      <Breadcrumbs categoryName={pathname.slice(1)} />

      <header className={styles.title}>
        <h1>Favorites</h1>
        <p aria-label={`${items.length} items in favourites`}>{`${items.length} items`}</p>
      </header>

      {isLoading ? (
        <Loader />
      ) : (
        items.length !== 0 ? (
          <ul className={styles.items}>
            {items.map(item => (
              <li key={item.id}>
                <CardItem product={item} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyContent
            title="Your favourites is empty"
            img="img/is-empty.png"
          />
        )
      )}
    </div>
  );
};

export default FavouritesPage;

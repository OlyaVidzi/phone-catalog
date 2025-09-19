import styles from './ShopByCategory.module.scss';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../../services/product.service';
import { IProductCard } from '../../../../interfaces/ProductCard.interface';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  const [products, setProducts] = useState<IProductCard[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setError('');

      try {
        const data = await ProductService.getAll();

        if (data) {
          setProducts(data);
        }
      } catch (err) {
        setError('Error fetching products');
      }
    };

    fetchData();
  }, []);

  const countPhones =
    products.filter(product => product.category === 'phones');
  const countTablets =
    products.filter(product => product.category === 'tablets');
  const countAccessories =
    products.filter(product => product.category === 'accessories');

  return (
    !error && (
      <section className={styles.container} aria-label="Shop by category">
        <h2>Shop by category</h2>

        <div className={styles.categories}>
          <Link
            to={'/phones'}
            className={styles.categories__item}
            aria-label={`Go to Mobile Phones category, ${countPhones.length} models`}
          >
            <figure>
              <img src="img/category-phones.png" alt="Mobile phones" />
              <figcaption>
                <h3>Mobile phones</h3>
                <p>{`${countPhones.length} models`}</p>
              </figcaption>
            </figure>
          </Link>

          <Link
            to={'/tablets'}
            className={styles.categories__item}
            aria-label={`Go to Tablets category, ${countTablets.length} models`}
          >
            <figure>
              <img src="img/category-tablets.png" alt="Tablets" />
              <figcaption>
                <h3>Tablets</h3>
                <p>{`${countTablets.length} models`}</p>
              </figcaption>
            </figure>
          </Link>

          <Link
            to={'/accessories'}
            className={styles.categories__item}
            aria-label={`Go to Accessories category, ${countAccessories.length} models`}
          >
            <figure>
              <img src="img/category-accessories.png" alt="Accessories" />
              <figcaption>
                <h3>Accessories</h3>
                <p>{`${countAccessories.length} models`}</p>
              </figcaption>
            </figure>
          </Link>
        </div>
      </section>
    )
  );
};

export default ShopByCategory;

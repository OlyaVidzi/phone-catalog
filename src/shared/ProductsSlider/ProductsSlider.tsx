import React, { useRef } from 'react';
import styles from './ProductsSlider.module.scss';
import CardItem from '../CardItem';
import { IProductCard } from '../../interfaces/ProductCard.interface';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

interface IProductsSliderProps {
  products: IProductCard[],
  title: string,
}

const ProductsSlider: React.FC<IProductsSliderProps> = ({
  products,
  title,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 284;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 284;
    }
  };

  return (
    <section className={styles.slider} aria-label={`${title} slider`} role="region">
      <div className={styles.slider__header}>
        <h2>{title}</h2>
        <div>
          <button
            onClick={slideLeft}
            aria-label={`Scroll ${title} slider left`}
          >
            <FaAnglesLeft />
          </button>
          <button
            onClick={slideRight}
            aria-label={`Scroll ${title} slider right`}
          >
            <FaAnglesRight />
          </button>
        </div>
      </div>

      <div className={styles.slider__main}>
        <div className={styles.slider__mainItems} ref={sliderRef}>
          {products.map(product => (
            <CardItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default ProductsSlider;

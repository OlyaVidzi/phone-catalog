import React from 'react';
import styles from './Description.module.scss';
import {
  IProductDetails,
} from '../../../../interfaces/ProductDetails.interface';

const Description: React.FC<{ product: IProductDetails }> = ({ product }) => {
  const specs = [
    { label: "Screen", value: product?.screen },
    { label: "Resolution", value: product?.resolution },
    { label: "Processor", value: product?.processor },
    { label: "RAM", value: product?.ram },
    { label: "Capacity", value: product?.capacity },
    { label: "Camera", value: product?.camera },
    { label: "Zoom", value: product?.zoom },
    { label: "Cell", value: product?.cell.join(", ") },
  ];

  return (
    <section
      className={styles.description}
      aria-label="Product description and technical specifications"
    >
      <section className={styles.about} aria-label="About product">
        <h2>About</h2>
        <hr className={styles.line} />
        {product.description.map(item => (
          <article className={styles.about__item} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section
        className={styles.techSpecs}
        aria-label="Technical specifications"
      >
        <h2>Tech specs</h2>
        <hr className={styles.line} />
        <dl className={styles.techSpecs__items}>
          {specs.map((spec, index) =>
            spec.value && (
              <div key={index}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            )
          )}
        </dl>
      </section>
    </section>
  );
};

export default Description;

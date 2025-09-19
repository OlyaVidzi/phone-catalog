import React from 'react';
import styles from './EmptyContent.module.scss';

interface IEmptyContentProps {
  title?: string;
  img: string;
}

const EmptyContent: React.FC<IEmptyContentProps> = ({ title, img }) => {
  return (
    <section
      className={styles.isEmpty}
      role="region"
      aria-label={title || 'Empty content'}
      aria-live="polite"
    >
      {title && <h2>{title}</h2>}
      <img src={img} alt={title || 'Empty content illustration'} />
    </section>
  );
};

export default EmptyContent;

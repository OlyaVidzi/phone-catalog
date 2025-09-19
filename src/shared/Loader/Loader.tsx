import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div
      className={styles.loader}
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;

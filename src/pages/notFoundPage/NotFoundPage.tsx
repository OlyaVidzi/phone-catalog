import EmptyContent from '../../shared/EmptyContent';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <section className={styles.container} aria-label="Page not found">
      <EmptyContent
        title="Page not found"
        img='img/page-not-found.png'
      />
    </section>
  );
};

export default NotFoundPage;

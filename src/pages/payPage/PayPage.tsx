import { Link } from "react-router-dom";
import styles from './PayPage.module.scss';
import { useEffect, useState } from "react";
import Loader from "../../shared/Loader";

const PayPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={styles.main}>
          <h1> This feature is coming soon. Please check back later.</h1>
          <Link to='/cart' className={styles.main__back}>Back</Link>
        </section>
      )}
    </div>
  );
};

export default PayPage;

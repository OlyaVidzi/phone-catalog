import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <Link to={'/'}>
        <img src={theme === 'dark'
          ? 'images/logo/LogoDark.png'
          : 'images/logo/LogoLight.png'
        }
        className={styles.logo} />
      </Link>
      <ul className={styles.nav}>
        <li onClick={handleScrollTop}>
          <a
            href="https://github.com/OlyaVidzi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </li>
        <li onClick={handleScrollTop}>
          <Link to={'/'}>CONTACTS</Link>
        </li>
        <li onClick={handleScrollTop}>
          <Link to={'/'}>RIGHTS</Link>
        </li>
      </ul>
      <div className={styles.backToTop} onClick={handleScrollTop}>
        <h4>Back to top</h4>
        <img src="./images/icons/BackToTop.png" />
      </div>
    </div>
  );
};

export default Footer;

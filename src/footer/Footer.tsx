import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.container}>
      <NavLink to="/" aria-label="Go to homepage">
        <img
          src={theme === 'dark'
            ? 'images/logo/LogoDark.png'
            : 'images/logo/LogoLight.png'
          }
          className={styles.logo}
          alt="Nice Gadgets logo"
        />
      </NavLink>

      <nav aria-label="Footer navigation">
        <ul className={styles.nav}>
          <li>
            <a
              href="https://github.com/OlyaVidzi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit OlyaVidzi GitHub profile"
              onClick={handleScrollTop}
            >
              GITHUB
            </a>
          </li>
          <li>
            <NavLink to="/" onClick={handleScrollTop}>
              CONTACTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={handleScrollTop}>
              RIGHTS
            </NavLink>
          </li>
        </ul>
      </nav>

      {isVisible && (
        <button
          className={styles.backToTop}
          onClick={handleScrollTop}
          aria-label="Scroll to top"
        >
          <MdKeyboardArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;

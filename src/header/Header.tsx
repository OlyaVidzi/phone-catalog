import { useContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import HamburgerMenu from './HamburgerMenu';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ThemeContext } from '../contexts/ThemeContext';
import ButtonSwitchTheme from
  '../shared/Buttons/ButtonSwitchTheme/ButtonSwitchTheme';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>('/');
  const { pathname } = useLocation();
  const cartItems = useTypedSelector(state => state.cart.items);
  const favouritesItems = useTypedSelector(state => state.favourites.items);
  const countItemsInCart =
    cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <img
            className={styles.logo}
            src={theme === 'dark'
              ? 'images/logo/LogoDark.png'
              : 'images/logo/LogoLight.png'
            } />
        </Link>

        <ul className={styles.nav}>
          <li>
            <Link to="/" className={`${styles.nav__link} ${active === '/' ? styles.active : ''}`}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/phones" className={`${styles.nav__link} ${active === '/phones' ? styles.active : ''}`}>
              PHONES
            </Link>
          </li>
          <li>
            <Link to="/tablets" className={`${styles.nav__link} ${active === '/tablets' ? styles.active : ''}`}>
              TABLETS
            </Link>
          </li>
          <li>
            <Link to="/accessories" className={`${styles.nav__link} ${active === '/accessories' ? styles.active : ''}`}>
              ACCESSORIES
            </Link>
          </li>
        </ul>

        <div className={styles.icons}>
          <Link to="/favourites" className={`${styles.icons__link} ${active === '/favourites' ? styles.active : ''}`}>
            <img src={theme === 'dark'
              ? 'images/icons/FavouritesDark.png'
              : 'images/icons/FavouritesLight.png'
            } />
            {favouritesItems.length > 0 && (
              <div>{favouritesItems.length}</div>
            )}
          </Link>

          <Link to="/cart" className={`${styles.icons__link} ${active === '/cart' ? styles.active : ''}`}>
            <img src={theme === 'dark'
              ? 'images/icons/CartDark.png'
              : 'images/icons/CartLight.png'
            } />
            {cartItems.length > 0 && (
              <div>{countItemsInCart}</div>
            )}
          </Link>
        </div>
        {/* <DropdownLanguage /> */}

        <div className={styles.settings}>
          <ButtonSwitchTheme
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </div>

        <div className={styles.burgerIcon}>
          <button onClick={() => setMenuOpen(prev => !prev)}>
            {menuOpen === true
              ? (
                <img
                  src="images/icons/Close.png"
                  className={styles.menuImg}
                />
              )
              : (
                <img
                  src="images/icons/Menu.png"
                  className={styles.menuImg}
                />
              )
            }
          </button>
        </div>
      </div>

      {menuOpen && (
        <HamburgerMenu setMenuOpen={setMenuOpen}/>
      )}
    </>
  );
};

export default Header;

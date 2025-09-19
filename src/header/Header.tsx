import { useContext, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import HamburgerMenu from './HamburgerMenu';
import { Link, NavLink } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ThemeContext } from '../contexts/ThemeContext';
import ButtonSwitchTheme from
  '../shared/Buttons/ButtonSwitchTheme/ButtonSwitchTheme';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const cartItems = useTypedSelector(state => state.cart.items);
  const favouritesItems = useTypedSelector(state => state.favourites.items);
  const countItemsInCart =
    cartItems.reduce((total, item) => total + item.quantity, 0);

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
        <Link to="/" aria-label="Go to homepage">
          <img
            className={styles.logo}
            src={theme === 'dark'
              ? 'images/logo/LogoDark.png'
              : 'images/logo/LogoLight.png'
            }
            alt='Nice Gadgets logo'
          />
        </Link>

        <nav aria-label='Main navigation'>
          <ul className={styles.nav}>
            <li>
              <NavLink to="/" aria-label="Go to homepage"
                className={({ isActive }) =>
                  `${styles.nav__link} ${isActive ? styles.active : ""}`
                }>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/phones" aria-label="Go to phones page"
                className={({ isActive }) =>
                  `${styles.nav__link} ${isActive ? styles.active : ""}`
                }>
                PHONES
              </NavLink>
            </li>
            <li>
              <NavLink to="/tablets" aria-label="Go to tablets page"
                className={({ isActive }) =>
                  `${styles.nav__link} ${isActive ? styles.active : ""}`
                }>
                TABLETS
              </NavLink>
            </li>
            <li>
              <NavLink to="/accessories" aria-label="Go to accessories page"
                className={({ isActive }) =>
                  `${styles.nav__link} ${isActive ? styles.active : ""}`
                }>
                ACCESSORIES
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.icons}>
          <NavLink to="/favourites" aria-label="Go to favourites page"
            className={({ isActive }) =>
              `${styles.icons__link} ${isActive ? styles.active : ""}`
            }>
            <img src={theme === 'dark'
              ? 'images/icons/FavouritesDark.png'
              : 'images/icons/FavouritesLight.png'
            }
            alt='Favourites'
            />
            {favouritesItems.length > 0 && (
              <div aria-label={`${favouritesItems.length} items in favourites`}>
                {favouritesItems.length}
              </div>
            )}
          </NavLink>

          <NavLink to="/cart" aria-label="Go to cart page"
            className={({ isActive }) =>
              `${styles.icons__link} ${isActive ? styles.active : ""}`
            }>
            <img src={theme === 'dark'
              ? 'images/icons/CartDark.png'
              : 'images/icons/CartLight.png'
            }
            alt='Cart'
            />
            {cartItems.length > 0 && (
              <div aria-label={`${cartItems.length} items in cart`}>
                {countItemsInCart}
              </div>
            )}
          </NavLink>
        </div>

        <div className={styles.burgerIcon}>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen
              ? (<IoClose />) : (<IoMenu />)
            }
          </button>
        </div>

        <div className={styles.btnSwitch}>
          <ButtonSwitchTheme
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </div>
      </div>

      {menuOpen && (
        <HamburgerMenu setMenuOpen={setMenuOpen}/>
      )}
    </>
  );
};

export default Header;

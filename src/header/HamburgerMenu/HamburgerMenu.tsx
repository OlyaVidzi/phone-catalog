import { NavLink } from 'react-router-dom';
import styles from './HamburgerMenu.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

interface IHamburgerMenuProps {
  setMenuOpen: (isOpen: boolean) => void,
}

const HamburgerMenu: React.FC<IHamburgerMenuProps> = ({ setMenuOpen }) => {
  const { theme } = useContext(ThemeContext);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.container} aria-label="Mobile navigation">
      <ul className={styles.nav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles.active : ""}`
            }
            onClick={handleCloseMenu}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/phones"
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles.active : ""}`
            }
            onClick={handleCloseMenu}
          >
            PHONES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles.active : ""}`
            }
            onClick={handleCloseMenu}
          >
            TABLETS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles.active : ""}`
            }
            onClick={handleCloseMenu}
          >
            ACCESSORIES
          </NavLink>
        </li>
      </ul>

      <div className={styles.icons}>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            `${styles.icons__link} ${isActive ? styles.active : ""}`
          }
          onClick={handleCloseMenu}
        >
          <img
            src={theme === 'dark'
              ? 'images/icons/FavouritesDark.png'
              : 'images/icons/FavouritesLight.png'
            }
            alt="Favourites"
          />
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${styles.icons__link} ${isActive ? styles.active : ""}`
          }
          onClick={handleCloseMenu}
        >
          <img
            src={theme === 'dark'
              ? 'images/icons/CartDark.png'
              : 'images/icons/CartLight.png'
            }
            alt="Cart"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default HamburgerMenu;

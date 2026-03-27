import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navContent}>
        <span className={styles.marketName}>Сникер - магазин</span>
        <div className={styles.links}>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}>
            <span>Главная</span>
          </NavLink>
          <NavLink
            to={'/card'}
            className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}>
            <span>Корзина</span>{' '}
          </NavLink>
          <NavLink
            to={'/contacts'}
            className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}>
            <span>Контакты</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Header;

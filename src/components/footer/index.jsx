import styles from './styles.module.css';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import insta from '../../assets/icons/insta.svg';

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <span>Контакты</span>
        <div>
          <img src={facebook} alt="facebookSvg" />
          <img src={twitter} alt="twitterSvg" />
          <img src={insta} alt="instaSvg" />
        </div>
        <div>
          <span>8 800 000 00 00</span>
          <span>emailexample@email.com</span>
        </div>
        <div>
          <span>2024 Сникер-магазин. Все права защищены</span>
          <input type="text" placeholder="Введите свой email:" />
        </div>
      </div>
    </div>
  );
}
export default Footer;

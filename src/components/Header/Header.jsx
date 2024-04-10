import styles from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as ShopIcon } from "../../images/shop.svg";
import { ReactComponent as BurgerIcon } from "../../images/burger.svg";

const Header = () => (
  <div className={styles.container}>
    <LogoIcon className={styles.logo} />
    <ul className={styles.menu}>
      <li>
        <a href="#" className={styles.menuItem}>Home</a>
      </li>
      <li>
        <a href="#"className={styles.menuItem}>Products</a>
      </li>
      <li>
        <a href="#">
          <ShopIcon className={styles.menuItem}/>
        </a>
      </li>
    </ul>
    <BurgerIcon className={styles.burgerMenu} />
  </div>
);

export default Header;

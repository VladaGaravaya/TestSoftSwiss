import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as ShopIcon } from "../../images/shop.svg";
import { ReactComponent as BurgerIcon } from "../../images/burger.svg";
import { ReactComponent as CrossIcon } from "../../images/cross.svg";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.container}>
    <LogoIcon className={styles.logo} />
    <ul className={styles.menu}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">
          <ShopIcon />
        </a>
      </li>
    </ul>
    <input className={styles.sideMenu} type="checkbox" id="sideMenu" />
    <label className="hamb" for="sideMenu">
      <BurgerIcon className={styles.burgerIcon} />
      <CrossIcon className={styles.crossIcon} />
    </label>
    <div className={styles.mobileMenu}>
      <ul>
        <li><a>Home</a></li>
        <li><a>Products</a></li>
        <li><a>Shop</a></li>
      </ul>
    </div>
  </div>
);

export default Header;

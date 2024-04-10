import { ReactComponent as Earth } from "../../images/earth.svg";
import Button from "../Button/Button";

import styles from "./Banner.module.scss";

const Banner = () => (
  <div class={styles.banner}>
    <div class={styles.info}>
      <h1>
        Discover the vast expanses of <span>space</span>
      </h1>
      <h3>
        Where the possibilities are <span>endless!</span>
      </h3>
      <Button type="primary" />
    </div>
    <Earth className={styles.earth} />
  </div>
);

export default Banner;

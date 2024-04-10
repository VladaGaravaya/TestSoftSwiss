import Button from "../Button/Button";
import styles from "./Offers.module.scss";

const Offers = () => (
  <div className={styles.offers}>
    <h4>Offers</h4>
    <div className={styles.container}>
      <div className={styles.offerItem}>
        <h2>Move the borders of reality!</h2>
        <p>Go on a space adventure</p>
        <Button type="outlined" />
      </div>
      <div className={styles.offerItem}>
        <h2>Space is not just stars and planets</h2>
        <p>Go on a space adventure</p>
        <Button type="outlined" />
      </div>
      <div className={styles.offerItem}>
        <h2>For those who dream of stars</h2>
        <p>Our offer: make your dream come true</p>
        <Button type="outlined" />
      </div>
      <div className={styles.offerItem}>
        <h2>Fulfill your fantastic dreams</h2>
        <p>Space has never been so close</p>
        <Button type="outlined" />
      </div>
    </div>
    <h4>Embark on a space journey</h4>
    <p className={styles.description}>
      Travelling into space is one of the most exciting and unforgettable
      adventures that can change your life forever. And if you have ever dreamed
      of exploring stars, planets and galaxies, then our company is ready to
      help you realize this dream. We offer a unique experience that will allow
      you to go on a space journey and see all the secrets of the universe. We
      guarantee that every moment in space will be filled with incredible
      impressions, excitement and new discoveries. Our team of professionals
      takes care of your safety and comfort so that you can fully enjoy your
      adventure in space. We offer various options for space excursions.
    </p>
    <button className={styles.readMoreCta}>Read more</button>
  </div>
);

export default Offers;
